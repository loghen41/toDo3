(function () {
    angular.module('App')
        .component('list', {
            bindings: {},
            templateUrl: 'js/Components/list/list.html',
            controller: listController,
            controllerAs: 'vm'
        });

    function listController(mainService) {
        var vm = this;
        vm.lists = '';
        vm.selected = '';
        vm.$onInit = onInit;


        //This Component Functions are listed in alphabetical order

        //This calls the mainService to add a List to the Lists Array
        this.addList = function (newList) {
            response = mainService.addList(newList);
            vm.lists = response;
            vm.newList = '';
        };

        //This calls the mainService to clear all completed Lists
        this.clearCompleted = function () {
            mainService.clearCompleted();
        };

        //This opens the Editing Feature in the View
        this.openEdit = function (list) {
            if (vm.selected === list.listName) {
                vm.selected = ''
            }
            else {
                vm.selected = list.listName;
            }

        };

        //This calls the mainService to Delete the List
        this.delete = function (list) {
            mainService.delete(list);
        };

        //This calls the mainService to Edit the List Name
        this.edit = function (list, newName) {
            mainService.edit(list, newName);
            vm.newName = '';
        };

        //This calls the mainService to Mark the List Complete
        this.markComplete = function (list) {

            mainService.markComplete(list);

        };

        //This calls the mainService to Mark the List as Selected
        this.select = function (list) {
            mainService.select(list);
        };

        //This funciton is called on Initialization
        function onInit() {
            vm.lists = mainService.get();
        }

    }

})();