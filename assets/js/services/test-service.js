/**
*  Module
*
* Description
*/
angular
    .module('clow')
    .service('testService', ['$http', function($http) {

        this.getAllData = function() {
            // return $http.get('url-to-your-api')
            //     .then(function(response) {
                    return {
                        data: [
                            {
                                id: 1,
                                title: 'test1'
                            },
                            {
                                id: 2,
                                title: 'test2'
                            }
                        ]
                    } // delete this object and change this to response.data;
                // });
        }

    }])