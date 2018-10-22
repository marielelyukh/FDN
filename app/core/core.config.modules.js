;(function () {
    angular
        .module('app')
        .config(['cfpLoadingBarProvider','$compileProvider','$httpProvider','toastrConfig',
            function (cfpLoadingBarProvider,$compileProvider,$httpProvider,toastrConfig) {
                angular.extend(toastrConfig, {
                    preventOpenDuplicates: true
                });
            cfpLoadingBarProvider.includeSpinner = true;
            // $uibTooltipProvider.options({
            //     // popupCloseDelay : 2000,
            //     popupDelay: 500,
            //     placement: 'top'
            // });
        }]);
})();

