(function() {
angular.module('App')
    .component('settings',{
       bindings: {
           background: '='
       },
        templateUrl: '../js/Components/settings/settings.html',
        controller: settingsController,
        controllerAs: 'vm'
    });
    
    function settingsController(mainService) {
        vm = this;
        vm.$onInit = onInit;
        vm.styles = [];

        vm.applyStyles = function(style, language) {
            if (style) {
                mainService.setStyle(style);
                vm.background.background = "url(" + style + ") no-repeat center center fixed";
                vm.selectedStyle = undefined;
            }
            if(language) {
                mainService.setLanguage(language);
                vm.selectedLanguage = undefined;
            }
        };

        function onInit() {
            vm.styles = mainService.getStyles();
        }
    }
    
})();