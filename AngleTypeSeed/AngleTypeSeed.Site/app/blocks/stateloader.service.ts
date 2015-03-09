/// <reference path="../../Scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../Scripts/typings/requirejs/require.d.ts" />

module app.blocks {
	'use strict';

	export interface IStateLoaderService {
		loadDependencies(stateName: string): ng.IPromise<any>;
	}

	interface ISiteDefinitionResult {
		dependencies: string[];
	}

	class StateLoaderService implements IStateLoaderService {
		cache: ng.ICacheObject;

		constructor(
			private $http: ng.IHttpService,
			private $q: ng.IQService,
			private $cacheFactory: ng.ICacheFactoryService) {
			this.cache = $cacheFactory("stateDependencies");
		}

		loadDependencies(stateName: string): ng.IPromise<any> {
			var defer = this.$q.defer();

			var deps: string[] = this.cache.get(stateName);

			if (angular.isDefined(deps)) {
				// Already present in cache so pass immediately to require loader
				this.loadDependenciesFromArray(deps, defer);
			}
			else {
				// Load from our web-api service
				this.$http.get('/api/sitedefinition/' + stateName)
					.success(
					(callback: ng.IHttpPromiseCallbackArg<ISiteDefinitionResult>) => {
						deps = callback.data.dependencies;
						if (angular.isDefined(deps) && angular.isArray(deps)) {
							this.cache.put(stateName, deps);
							this.loadDependenciesFromArray(deps, defer);
						}
						else {
							this.cache.put(stateName, null);
							defer.resolve();
						}
					})
					.error(
					(callback: ng.IHttpPromiseCallbackArg<any>) => {
						defer.reject();
					});
			}
			return defer.promise;
		}

		loadDependenciesFromArray(dependencies: string[], defer: ng.IDeferred<any>): void {
			require(dependencies,(): void => {
				defer.resolve();
			});
		}
	}

	stateLoaderServiceFactory.$inject = ['$http', '$q', '$cacheFactory'];
	function stateLoaderServiceFactory(
		$http: ng.IHttpService,
		$q: ng.IQService,
		$cacheFactory: ng.ICacheFactoryService): IStateLoaderService {
		return new StateLoaderService($http, $q, $cacheFactory);
	}

	angular
		.module('app.blocks')
		.factory('app.blocks.StateLoader', stateLoaderServiceFactory);
}
 