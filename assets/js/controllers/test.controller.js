/**
* Module
*
* Description
* Gets a list of articles
*/
angular
    .module('clow')
    .controller('TestCtrl', ['$scope', 'testService', function($scope, testService) {
        $scope.tests = testService.getAllData().data;
        console.log($scope.tests);


        // Enable this when you got an api set in test-service.js
        // testService.getAllData()
        //     .success(function(response) {
        //         console.log(response);
        //         $scope.tests = response;
        //     });


    }])
