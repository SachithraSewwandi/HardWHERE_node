/**
 * Created by sachithra on 16/11/15.
 */

angular.module('myapp.CompanyAdd', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {

        //$locationProvider.html5Mode(true);

        $routeProvider
            .when('/AddCompany', {
            templateUrl: 'addCompany/addCompany.html',
            controller: 'CompanyAdd'
        });

    }])

    .controller('CompanyAdd', ['$scope','$http','$window',function($scope,$http,$window) {
        $scope.save = function() {

            console.log($scope.form);
            var data1= {
                name: JSON.stringify($scope.form.name),
                adress1:JSON.stringify($scope.form.add1),
                adress2:JSON.stringify($scope.form.add2),
                adress3:JSON.stringify($scope.form.add3),
                email:JSON.stringify($scope.form.email),
                userName:JSON.stringify($scope.form.UserName),
                password:JSON.stringify($scope.form.password),
                confpassword:JSON.stringify($scope.form.confpassword)

            }
            //$scope.form = {}; // clear the form so our user is ready to enter another
            console.log(data1);
            $http({
                method: 'POST',
                url: "/AddCompany",
                data: $.param(data1),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}

            }).success(function(data){
                var url="#/viewdata/"+(data1.name);
                console.log(url)
                $window.location.href=url
                console.log("data sent");
            }).error(function(data) {
                console.log('Error: ' + data);
            });
        };


    }]);
