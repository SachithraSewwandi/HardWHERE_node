/**
 * Created by sachithra on 17/11/15.
 */
angular.module('myapp.viewCompany', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/viewdata', {
                templateUrl: 'viewCompany/viewCompany.html',
                controller: 'viewCompany'
            });
    }])

    .controller('viewCompany', ['$scope','$http',function($scope,$http) {
        console.log("get");

        $http.get('/viewdata')
            .success(function(data) {
                console.log(data)
                $scope.names = data.name;
                $scope.mail = data.email;
            })
            .error(function(data){
                console.log(data)
            })
    }]);