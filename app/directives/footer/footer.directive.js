;(function () {
    angular.module('directives.fdnFooter', [])
        .directive('fdnFooter', fdnFooter);

    fdnFooter.$inject = ['$document', '$timeout'];

    function fdnFooter($document, $timeout) {
        return {
            restrict: 'E',
            templateUrl: 'directives/footer/footer.html',
            scope: {
            },
            controller: 'FooterCtrl',
            controllerAs: 'vm',
            link: function (scope, element, attrs) {

            }
        };
    }
})();

