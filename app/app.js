;(function () {
    angular.module('app',
        ['app.core',
            'app.directives',
            'app.factory',
            'app.services'
        ]).run(runBlock);

    /* @ngInject */
    function runBlock($timeout, $rootScope, $state) {
        $state.go('home')
    }
})();