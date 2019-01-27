'use strict';

angular.module('myApp.landing', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/landing', {
            templateUrl: 'landing.html',
            controller: 'LandingCtrl'
        });
    }])

    .controller('LandingCtrl', [function() {
        let vm = this;
        vm.pictures = [];
        (function initLanding() {
            console.log("got here");
            let url = "http://127.0.0.1:3000/selectPhaseOnePictures";
            fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "same-origin"
            }).then(response => {

                return response.json()
            }).then(pictures => {
                vm.pictures = pictures;

            }).catch(error => {
                console.log(error.message);
            })

        })();



    }]);
