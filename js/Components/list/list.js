(function () {
    angular.module('App')
        .component('list', {
            bindings: {},
            templateUrl: 'js/Components/list/list.html',
            controller: listController,
            controllerAs: 'vm'
        });

    function listController(listService, $mdToast) {
        var vm = this;
        vm.lists = '';
        vm.selected = '';
        vm.$onInit = onInit;


        //This Component Functions are listed in alphabetical order

        //This calls the listService to add a List to the Lists Array
        this.addList = function (newList) {
            showToast(newList);
            response = listService.addList(newList);
            vm.lists = response;
            vm.newList = '';
        };

        //This calls the listService to clear all completed Lists
        this.clearCompleted = function () {
            listService.clearCompleted();
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

        //This calls the listService to Delete the List
        this.delete = function (list) {
            listService.delete(list);
        };

        //This calls the listService to Edit the List Name
        this.edit = function (list, newName) {
            listService.edit(list, newName);
            vm.newName = '';
        };

        //This calls the listService to Mark the List Complete
        this.markComplete = function (list) {
            listService.markComplete(list);
        };
        

        //This calls the listService to Mark the List as Selected
        this.select = function (list) {
            listService.select(list);
        };
        
        
        //This funciton is called on Initialization
        function onInit() {
            vm.lists = listService.get();
        }

        //This opens up the Toast Div
        function showToast (listName) {
            var position = {
                bottom: false,
                top: true,
                left: false,
                right: true
            };
            $mdToast.show(
                $mdToast.simple()
                    .textContent(listName  + ' Added!')
                    .position('top right')
                    .hideDelay(3000)
            );
        }
    }

})();