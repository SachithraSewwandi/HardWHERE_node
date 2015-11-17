/**
 * Created by sachithra on 16/11/15.
 */

angular.module("myapp", ['ngRoute',
    "myapp.CompanyAdd",
    'myapp.addItem',
    'myapp.viewCompany'])

    .config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .otherwise({redirectTo: '/'});
}])

    .controller("mainCtrl",["$scope",function($scope){

}]);
