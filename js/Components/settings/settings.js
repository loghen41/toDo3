(function() {
angular.module('App')
    .component('settings',{
       bindings: {
           background: '='
       },
        templateUrl: 'js/Components/settings/settings.html',
        controller: settingsController,
        controllerAs: 'vm'
    });
    
    function settingsController(settingsService) {
        vm = this;
        vm.$onInit = onInit;
        vm.styles = [];

        vm.applyStyles = function(style, language) {
            if (style) {
                settingsService.setStyle(style);
                vm.background.background = "url(" + style + ") no-repeat center center fixed";
                vm.selectedStyle = undefined;
            }
            if(language) {
                settingsService.setLanguage(language);
                vm.selectedLanguage = undefined;
            }
        };

        function onInit() {
            vm.styles = settingsService.getStyles();
            vm.languages = settingsService.getLanguages();
        }
    }
    
})();