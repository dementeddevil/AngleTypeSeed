/// <reference path="../Scripts/typings/angularjs/angular.d.ts" />

module app {
	'use strict';

	class AppConfig {
		static $inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider', 'app.blocks.StateLoader'];

		constructor(
			$locationProvider: ng.ILocationProvider,
			$stateProvider: ng.ui.IStateProvider,
			$urlRouterProvider: ng.ui.IUrlRouterProvider,
			stateLoaderService: app.blocks.IStateLoaderService) {

			// Setup HTML5 support
			$locationProvider.html5Mode(true);

			// TODO: Setup routes
			// NOTE: All routes here are feature routes that allow each feature
			//	to be on-demand loaded as necessary
			$stateProvider.state('signup', {
				url: '/signup',
				resolve: {
					loadDependencies: ($stateParams: ng.ui.IStateParamsService): ng.IPromise<any> => {
						return stateLoaderService.loadDependencies('signup');
					}
				}
			});

			// Define our default route
			$urlRouterProvider.otherwise('/');
		}
	}

	angular
		.module('app')
		.config(AppConfig);
}
