'use strict';

angular.module('myApp.result', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/result', {
            templateUrl: 'result.html',
            controller: 'ResultCtrl'
        });
    }])

    .controller('ResultCtrl', [function() {
        let vm = this;
        vm.currPic = "./img/destinations/alaska.jpg";
        (function initLanding() {
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
                vm.currPic = vm.pictures[0];
                console.log(vm.currPic);

            }).catch(error => {
                console.log(error.message);
            })

        })();

    }]);