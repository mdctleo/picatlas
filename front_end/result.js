'use strict';

angular.module('myApp.result', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/result', {
            templateUrl: 'result.html',
            controller: 'ResultCtrl'
        });
    }])

    .controller('ResultCtrl', [function() {

    }]);