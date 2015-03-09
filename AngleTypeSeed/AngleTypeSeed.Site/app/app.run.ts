/// <reference path="../Scripts/typings/angularjs/angular.d.ts" />

((): void => {
	'use strict';

	angular
		.module('app')
		.run(startup);

	startup.$inject = ['$state'];
	function startup($state: ng.ui.IStateService): void {
		$state.go('signup');
	}

})();  