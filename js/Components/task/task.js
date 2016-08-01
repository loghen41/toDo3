(function () {
    angular.module('App')
        .component('task', {
            bindings: {},
            templateUrl: '../js/Components/task/task.html',
            controller: taskController,
            controllerAs: 'vm'
        });

    function taskController(mainService) {
        var vm = this;
        vm.deleting = false;
        vm.$onInit = onInit;
        vm.$onDestroy = onDestroy;

        //Component Functions are arranged in alphabetical order

        //This calls the mainService to add a Task to  List
        this.addTask = function(list, task) {
            mainService.addTask(list, task);
            vm.newTask = '';
        };

        //This calls the mainService to clear all completed Tasks
        this.clearCompleted = function(list) {
            mainService.clearCompleted(list);
        };
        
        //This calls the mainService to delete a Task from a List
        this.delete = function(task, list) {
            mainService.delete(task, list);
        };

        //This calls the mainService to edit a Task Name
        this.edit = function(task, newName) {
            mainService.edit(task, newName);
            vm.newName = '';
        };

        //This calls the mainService to mark a Task Complete
        this.markComplete = function(task) {
            mainService.markComplete(task);
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
            vm.lists =  mainService.get();
            vm.selected = mainService.getSelected();
        }

        //This function gets rid of the selected view on component Destruction
        function onDestroy() {
            mainService.select('');
        }

    }

})();