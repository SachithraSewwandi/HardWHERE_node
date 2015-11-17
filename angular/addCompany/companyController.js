/**
 * Created by sachithra on 16/11/15.
 */

angular.module('myapp.CompanyAdd', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/AddCompany', {
            templateUrl: 'addCompany/addCompany.html',
            controller: 'CompanyAdd'
        });
    }])

    .controller('CompanyAdd', ['$scope','$http',function($scope,$http) {
        $scope.save = function() {

            console.log($scope.form);
            var data= {
                name: JSON.stringify($scope.form.name),
                adress1:JSON.stringify($scope.form.add1),
                adress2:JSON.stringify($scope.form.add2),
                adress3:JSON.stringify($scope.form.add3),
                email:JSON.stringify($scope.form.email),
                userName:JSON.stringify($scope.form.UserName),
                password:JSON.stringify($scope.form.password),
                confpassword:JSON.stringify($scope.form.confpassword)

            }

            console.log(data);
            $http({
                method: 'POST',
                url: "/AddCompany",
                data: $.param(data),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}

            }).success(function(data){
                $scope.form = {}; // clear the form so our user is ready to enter another
                console.log("data sent");
            }) .error(function(data) {
                console.log('Error: ' + data);
            });
        };
    }]);
