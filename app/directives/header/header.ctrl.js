;(function () {
    'use strict';

    angular
        .module('app')
        .controller('HeaderCtrl', HeaderCtrl);

    HeaderCtrl.$inject = ['$scope'];
    function HeaderCtrl($scope) {
        var vm = this;
        vm.openNav = openNav;
        vm.closeNav = closeNav;
        function openNav() {
            document.getElementById("mySidenav").style.width = "300px";
        }
        function closeNav() {
            document.getElementById("mySidenav").style.width = "0";
        }
        var acc = document.getElementsByClassName("accordion");
        var i;

        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function() {
                var panel = this.nextElementSibling;
                if (panel.style.display === "block") {
                    panel.style.display = "none";
                } else {
                    panel.style.display = "block";
                }
            });
        }
    }

})();
