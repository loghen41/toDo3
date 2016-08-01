(function(){
angular.module('App')
    .controller('styleCtrl', function(mainService, $translate) {
        this.$onInit = function() {
            this.style = mainService.getSelectedStyle();
        };
        
    });

})();
