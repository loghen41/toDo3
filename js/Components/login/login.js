(function() {
    angular.module('App')
        .component('login', {
            templateUrl: 'js/Components/login/login.html',
            controller: loginController,
            controllerAs: 'vm'
        });
    
    function loginController(listService) {
        
        var vm = this;
        vm.login = login;
        vm.logout = logout;
        
        function login(provider) {
            vm.user = listService.login(provider)
                .then(function (response) {
                    }, function(error) { })
        }
        
        function logout() {
            vm.user = listService.logout();
        }
        
        
    }
    
    
})();