(function() {
angular.module('App')
    .component('about',{
       bindings: {},
        templateUrl: '../js/Components/about/about.html',
        controller: aboutController,
        controllerAs: 'vm'
    });
    
    function aboutController() {
        
    }
    
})();