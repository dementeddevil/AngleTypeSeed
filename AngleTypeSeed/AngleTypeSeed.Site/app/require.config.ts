/// <reference path="../Scripts/typings/requirejs/require.d.ts" />
/// <reference path="../Scripts/typings/angularjs/angular.d.ts" />

((): void=> {
	'use strict';

	require.config({
		baseUrl: 'bundles',
		bundles: {
			'angular': ['respond', 'angular-resource', 'angular-animate', 'angular-sanitize', 'angular-ui-router', 'angular-ui/ui-bootstrap-tpls', 'angular-ui/ui-utils'],
		},
		paths: {
		},
		shim: {
			// Core dependency setup
			'jquery': {
				exports: '$'
			},
			//'signalr': {
			//	deps: ['jquery', 'jquerysignalr']
			//},
			'angular': {
				deps: ['jquery']
			},
			//'breeze': {
			//	deps: ['angular']
			//},

			// App dependency setup
			'core': {
				deps: ['angular']
			},
			'blocks': {
				deps: ['core']
			},
			'app': {
				deps: ['blocks']
			},
			//'signup': {
			//	deps: ['app']
			//}
		},
		priority: [
			"angular"
		],
		deps: [],
		callback: null,
	});

	require([
		'app'
	],
		() => {
			var $html = angular.element(document.getElementsByTagName('html')[0]);
			angular.element().ready(function () {
				// bootstrap the app manually
				angular.bootstrap(document, ['app']);
			});
		});
})();
