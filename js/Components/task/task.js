(function () {
    angular.module('App')
        .component('task', {
            bindings: {},
            templateUrl: 'js/Components/task/task.html',
            controller: taskController,
            controllerAs: 'vm'
        });

    function taskController(listService, $mdToast) {
        var vm = this;
        vm.deleting = false;
        vm.$onInit = onInit;
        vm.$onDestroy = onDestroy;

        //Component Functions are arranged in alphabetical order

        //This calls the listService to add a Task to  List
        this.addTask = function(list, task) {
            showToast(task);
            listService.addTask(list, task);
            vm.newTask = '';
        };

        //This calls the listService to clear all completed Tasks
        this.clearCompleted = function(list) {
            listService.clearCompleted(list);
        };
        
        //This calls the listService to delete a Task from a List
        this.delete = function(task, list) {
            listService.delete(task, list);
        };

        //This calls the listService to edit a Task Name
        this.edit = function(task, newName) {
            listService.edit(task, newName);
            vm.newName = '';
        };

        //This calls the listService to mark a Task Complete
        this.markComplete = function(task) {
            listService.markComplete(task);
        };

        //This toggles open the Edit feature in the view
        this.openEdit = function(task) {
            if (vm.selectedTask === task.taskName) {
                vm.selectedTask = ''
            }
            else {
                vm.selectedTask = task.taskName;
            }

        };

        //This function runs on component Initialization
        function onInit() {
            vm.lists =  listService.get();
            vm.selected = listService.getSelected();
        }

        //This function gets rid of the selected view on component Destruction
        function onDestroy() {
            listService.select('');
        }

        //This opens up the Toast Div
        function showToast (taskName) {
            $mdToast.show(
                $mdToast.simple()
                    .textContent( taskName  + ' Added!')
                    .position('top right')
                    .hideDelay(3000)
            );
        }
    }

})();