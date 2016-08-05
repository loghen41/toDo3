(function(){
angular.module('App')
    .controller('styleCtrl', function(settingsService) {
        this.$onInit = function() {
            this.style = settingsService.getSelectedStyle();
        };
        
    });

})();
