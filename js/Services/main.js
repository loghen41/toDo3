(function () {
    angular.module('App')
        .service('listService', function ($localStorage, $timeout, $firebaseObject, $firebaseArray) {
            
            //This function establishes the parameters for each load
            function onInit () {
                
                //This IF-Statement establishes the user data on the very first load
                if (!$localStorage.lists) {
                    $localStorage.lists = [
                        {
                            listName: 'Make Breakfast',
                            completed: false,
                            icon: 'images/icons/notComplete.png',
                            deleting: false,
                            taskLists: [
                                {
                                    taskName: 'Buy Eggs',
                                    completed: false,
                                    icon: 'images/icons/notComplete.png',
                                    deleting: false
                                },
                                {
                                    taskName: 'Buy Bacon',
                                    completed: false,
                                    icon: 'images/icons/notComplete.png',
                                    deleting: false
                                },
                                {
                                    taskName: 'Buy Cheese',
                                    completed: false,
                                    icon: 'images/icons/notComplete.png',
                                    deleting: false
                                },
                                {
                                    taskName: 'Cook Omlet',
                                    completed: false,
                                    icon: 'images/icons/notComplete.png',
                                    deleting: false
                                }
                            ]
                        },
                        {
                            listName: 'Take A Nap',
                            completed: false,
                            icon: 'images/icons/notComplete.png',
                            deleting: false,
                            taskLists: []
                        }
                    ];
                }
            }

            onInit();
            
            var lists = $localStorage.lists;
            var selected = $localStorage.selected;

            //all Serivce functions are shown according to alphabetical order

            //Adding a List to the Lists Array
            this.addList = function (listName) {
                lists.push(
                    {
                        listName: listName,
                        completed: false,
                        icon: 'images/icons/notComplete.png',
                        deleting: false,
                        taskLists: []
                    });
                return lists;
            };

            //Adding a Task to the TaskLists Array
            this.addTask = function (list, taskName) {
                var task = {
                    taskName: taskName,
                    completed: false,
                    icon: 'images/icons/notComplete.png',
                    deleting: false
                };
                list.taskLists.push(task);
            };

            //This clears all completed Lists and Tasks Depending on What the user Selects
            this.clearCompleted = function (list) {
                var completedArray = [];

                if (list === undefined) {
                    for (var i = 0; i < lists.length; i++) {
                        if (lists[i].completed === true) {
                            lists[i].deleting = true;
                            completedArray.push(lists[i]);
                        }
                    }
                    $timeout(function () {
                        for (var i = 0; i < completedArray.length; i++) {
                            var index = lists.indexOf(completedArray[i]);
                            lists.splice(index, 1);
                        }
                    }, 1000);
                }
                else {
                    for (var i = 0; i < list.taskLists.length; i++) {
                        if (list.taskLists[i].completed === true) {
                            list.taskLists[i].deleting = true;
                            completedArray.push(list.taskLists[i]);
                        }
                    }
                    $timeout(function () {
                        for (var i = 0; i < completedArray.length; i++) {
                            var index = list.taskLists.indexOf(completedArray[i]);
                            list.taskLists.splice(index, 1);
                        }
                    }, 1000);
                }
            };

            //The Delete function, for both Tasks and Lists
            this.delete = function (item, secondItem) {
                if (secondItem !== undefined) {
                    item.deleting = true;
                    var index = secondItem.taskLists.indexOf(item);

                    $timeout(function () {
                        secondItem.taskLists.splice(index, 1);
                    }, 1000);
                }
                else {
                    item.deleting = true;
                    var index = lists.indexOf(item);
                    $timeout(function () {
                        lists.splice(index, 1);
                    }, 1000)
                }
            };

            //The Edit funciton, for both Tasks and Lists
            this.edit = function (item, newName) {
                if (item.hasOwnProperty('listName')) {
                    item.listName = newName;
                }
                else if (item.hasOwnProperty('taskName')) {
                    item.taskName = newName;
                }
            };

            //Getting Lists for Displaying to the View
            this.get = function () {
                return lists;
            };
            
            //this Will Get which List is being Viewed
            this.getSelected = function () {
                return selected;
            };

            //This Allows us to mark complete both Tasks and Lists
            this.markComplete = function (item) {
                if (!item.completed) {
                    item.completed = true;
                    item.icon = 'images/icons/complete.png'
                }
                else {
                    item.completed = false;
                    item.icon = 'images/icons/notComplete.png';
                }
            };

            //This sets which list is being Viewed
            this.select = function (item) {
                selected = item;
                $localStorage.selected = selected;
            };
        });
})();