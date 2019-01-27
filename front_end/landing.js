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
        vm.currPic = "./img/destinations/alaska.jpg";
        vm.tags = {};
        vm.addTag = addTag;
        vm.removeTag = removeTag;
        vm.nextPic = nextPic;
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


        function addTag() {

        }

        function removeTag() {

        }

        function nextPic($event) {

        }



    }]);
