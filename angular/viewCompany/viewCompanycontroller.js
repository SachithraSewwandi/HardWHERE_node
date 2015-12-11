/**
 * Created by sachithra on 17/11/15.
 */
angular.module('myapp.viewCompany', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/viewdata/:name', {
                templateUrl: 'viewCompany/viewCompany.html',
                controller: 'viewCompany'
            });
    }])

    .controller('viewCompany',['$scope','$http','$routeParams',function($scope,$http,$routeParams) {
        console.log("get");

        $http.get('/viewdata/:name')
        //console.log($routeParams.name)
            .success(function(data) {
                $scope.names = data.name;
                $scope.mail = data.email;
                $scope.add1=data.add1;
                $scope.add2=data.add2;
                $scope.add3=data.add3;
                $scope.items=data.item;
            })
            .error(function(data){
                console.log(data)
            })

        $scope.delete=function(item){
            console.log(item)
            var data={
                item:{
                    type:item.type,
                    price:item.price,
                    quantity:item.quantity
                }
            }

            console.log(data)
            $http({
                method: 'DELETE',
                url: "/viewdata/:name",
                data: $.param(item),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}

            }).success(function (data) {
                console.log(data);
            }).error(function (data) {
                console.log('Error: ' + data);
            })
        }

        $scope.update=function(){

        }

    }]);