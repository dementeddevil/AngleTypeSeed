/// <reference path="../../Scripts/typings/angularjs/angular.d.ts" />

((): void => {
	'use strict';

	angular.module('app.core', [
		// Angular module dependencies
		'ngSanitize',
		'ngResource',
		'ngTouch',
		'ngAnimate',

		// Angular UI
		'ui.router',
		'ui.bootstrap'

		// Application module dependencies

		// 3rd Party module dependencies
	]);
})();
  