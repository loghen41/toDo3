/**
 * Created by loganhendricks on 7/26/16.
 */
(function () {
    angular.module('App')
        .directive('noData', function () {
                return {
                    restrict: 'E',
                    bindToController: {},
                    controller: dataController,
                    controllerAs: 'vm',
                    templateUrl: '../js/Directives/no-data/no-data.html'
                }
            }
        );

    function dataController() {
        

    }
})
();