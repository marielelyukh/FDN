;(function () {
    angular
        .module('app')
        .controller('HomeCtrl', HomeCtrl);

    /* @ngInject */
    function HomeCtrl() {
        var vm = this;
        console.log('kekek')
    }
})();