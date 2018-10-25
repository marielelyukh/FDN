;(function () {
    'use strict';
    angular
        .module('app')
        .config(mainConfig);

    /* @ngInject */
    function mainConfig($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/home');
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'templates/home/home.html',
                controller: 'HomeCtrl',
                controllerAs: 'vm'
            })
            .state('services', {
                url: '/services',
                templateUrl: 'templates/services/services.html',
                controller: 'ServiceCtrl',
                controllerAs: 'vm'
            })
    }
})();

