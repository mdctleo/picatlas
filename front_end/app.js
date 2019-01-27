'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'myApp.landing',
    'myApp.result'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {

    $routeProvider.when('/landing',
        {
            controller: 'LandingCtrl',
            templateUrl: 'landing.html',
            controllerAs: 'vm'

        });

    $routeProvider.when('/result',
        {
            controller: 'ResultCtrl',
            templateUrl: 'result.html',
            controllerAs: 'vm'
        });

    $routeProvider.otherwise({redirectTo: '/landing'});
}]);
