/**
 * Created by hsenid on 1/11/16.
 */
angular.module("myapp.footer",[])
    .directive("footer", function() {
        return {
            restrict: 'A',
            templateUrl: 'footer.html',
            scope: {},
        };
    })