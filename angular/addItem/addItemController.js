/**
 * Created by sachithra on 17/11/15.
 */
angular.module('myapp.addItem', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/AddItem', {
            templateUrl: 'addItem/addItem.html',
            controller: 'AddItem'
        });
    }])

    .controller('AddItem', ['$scope','$http',function($scope,$http) {

        $scope.update = function () {
            console.log($scope.form);

            var item = {
                name: JSON.stringify($scope.form.name),
                type: JSON.stringify($scope.form.type),
                quantity: JSON.stringify($scope.form.quantity),
                price: JSON.stringify($scope.form.price)
            }

            $http({
                method: 'POST',
                url: "/AddItem",
                data: $.param(item),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}

            }).success(function (data) {
                $scope.form = {}; // clear the form so our user is ready to enter another
                console.log(data);
            }).error(function (data) {
                console.log('Error: ' + data);
            })
        };

    }]);