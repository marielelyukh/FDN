;(function () {
    angular
        .module('app')
        .controller('HomeCtrl', HomeCtrl);

    /* @ngInject */
    function HomeCtrl() {
        var vm = this;
        $('.slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            infinite : false,
            prevArrow: $(".pp2"),
            nextArrow: $(".nn2"),
        });
        /*REMOVE or comment below code to see behavior of infinite false setting below code handles removing of arrows*/
        // $('#slider').on('afterChange', function(){
        //     console.log($('#slider').slick('slickCurrentSlide'));
        //     var currentSlide = $('#slider').slick('slickCurrentSlide');
        //     $('.slick-prev').hide();
        //     $('.slick-next').hide();
        //
        // });
        //
        //
        // $(document).ready(function(){
        //     var currentSlide = $('#slider').slick('slickCurrentSlide');
        //     $('.slick-prev').hide();
        //     $('.slick-next').hide();
        //
        // });
        /*REMOVE TILL HERE*/
    }
})();