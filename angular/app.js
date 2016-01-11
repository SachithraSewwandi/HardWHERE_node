/**
 * Created by sachithra on 16/11/15.
 */

angular.module("myapp", ['ngRoute','ngResource',
    "myapp.CompanyAdd",
    'myapp.addItem',
    'myapp.viewCompany'])

    .config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider) {
       // $locationProvider.html5Mode(true);

        $routeProvider
            .otherwise({redirectTo: '/'});

        $locationProvider.html5Mode(true);
}])

    .controller("mainCtrl",["$scope",function($scope){

}]);
