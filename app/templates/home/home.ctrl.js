;(function () {
    angular
        .module('app')
        .controller('HomeCtrl', HomeCtrl);

    /* @ngInject */
    function HomeCtrl() {
        var vm = this;
        console.log('kekek');
        $('.slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            infinite: true,
            cssEase: 'linear'
        });
    }
})();