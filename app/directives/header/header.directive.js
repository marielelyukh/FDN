;(function () {
    angular.module('directives.fdnHeader', [])
        .directive('fdnHeader', fdnHeader);

    fdnHeader.$inject = ['$document', '$timeout'];

    function fdnHeader($document, $timeout) {
        return {
            restrict: 'E',
            templateUrl: 'directives/header/header.html',
            scope: {

            },
            controller: 'HeaderCtrl',
            controllerAs: 'vm',
            link: function (scope, element, attrs) {

            }
        };
    }
})();

