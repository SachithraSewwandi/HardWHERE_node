/**
 * Created by sachithra on 17/11/15.
 */
angular.module('myapp.addItem', ['ngRoute','ngResource'])

    .config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider) {

        $routeProvider.when('/users/AddItem/:id', {
            templateUrl: 'addItem/addItem.html',
            controller: 'AddItem'
        });
        $locationProvider.html5Mode(true);
    }])

    .controller('AddItem', ['$scope','$http','$routeParams','$window',function($scope,$http,$routeParams,$window) {
        //var users = $resource("http://localhost:3006/users/AddItem/:id");
        $scope.update = function () {
            //console.log($scope.form);

            var item = {

                type: JSON.stringify($scope.form.type),
                quantity: JSON.stringify($scope.form.quantity),
                price: JSON.stringify($scope.form.price)
            }
            //$scope.user = users.get({id: 1});

            var url="/users/AddItem/"+$routeParams.id;
            console.log(url);
            $http({
                method: 'POST',
                url: url,
                data: $.param(item),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}

            }).success(function (data) {
                $scope.form = {}; // clear the form so our user is ready to enter another
                console.log(data);
            }).error(function (data) {
                console.log('Error: ' + data);
            })
        };

        $scope.change=function(){
            var url="/users/viewusers/"+$routeParams.id
            console.log(url)
            $window.location.href=url
        }
    }]);