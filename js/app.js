(function () {
    var app = angular.module('App',
        [
            'ui.router',
            'ngStorage',
            'pascalprecht.translate',
            'ngAnimate',
            'ngMaterial',
            'firebase'
        ])
        .config(function ($stateProvider, $urlRouterProvider, $translateProvider) {

            $urlRouterProvider.otherwise('/login');

            $stateProvider
                .state('list', {
                    url: '/list',
                    template: '<list></list>'
                })
                .state('about', {
                    url: '/about',
                    template: '<about></about>'
                })
                .state('task', {
                    url: '/task',
                    template: '<task></task>'
                })
                .state('settings', {
                    url: '/settings',
                    template: '<settings background="vm.style"></settings>'
                })
                .state('login', {
                    url: '/login',
                    template: '<login></login>'
                });


            $translateProvider.translations('en', {
                //Index Translations
                'LISTS': 'Lists',
                'ABOUT': 'About',
                'SETTINGS': 'Settings',
                //List Translations
                'LISTHEADER': 'My Lists',
                'LISTPLACEHOLDER': 'Add a new list',
                'LISTADD': 'Add List',
                'EDITLISTPLACEHOLDER': "Edit List Name Here",
                'LISTCOMPLETED': 'Clear completed lists',
                //Task Translations
                'TASKHEADER': 'List',
                'TASKPLACEHOLDER': 'Add a new Task',
                'TASKADD': 'Add Task',
                'EDITTASKPLACEHOLDER': "Edit Task Name Here",
                'TASKCOMPLETED': 'Clear completed tasks',
                'BACKBUTTON': 'Back to Lists',
                //Settings Translations
                'SELECTHEADER': 'App Settings',
                'SELECTDIV': 'Select your App Preferences',
                'BACKGROUND': 'Background Style',
                'LANGUAGE': 'Language Preference',
                'SETTINGSAPPLY': 'Apply Styles',
                //About Translations
                'ABOUTHEADER': 'About',
                'ABOUTDIV': 'About this App',
                'ABOUTPARAGRAPH1': "This App is a Student Built To-Do App designed to exhibit and show off my expertise in the AngularJS Framework.",
                'ABOUTPARAGRAPH2': "Thanks should be given to the MATC Web Design and Development program and AngularJS for its excellent Documentation.",
                //No-Data Translations
                'NODATA': 'No Items to show',
                //General Translations
                'APPLY': 'Apply',
                'EDIT': 'Edit',
                //Login Translations
                'LOGIN' : 'Login'

            });
            $translateProvider.translations('es', {
                //Index Translations
                'LISTS': 'Listas',
                'ABOUT': 'Informacion',
                'SETTINGS': 'Ajustes',
                //List Translations
                'LISTHEADER': 'Mis Listas',
                'LISTPLACEHOLDER': 'Nombre de la lista',
                'LISTADD': 'Agregar Lista',
                'EDITLISTPLACEHOLDER': "Nuevo nombre de la lista",
                'LISTCOMPLETED': 'Borrar listas completadas',
                //Task Translations
                'TASKHEADER': 'Lista',
                'TASKPLACEHOLDER': 'Nombre de la Tarea',
                'TASKADD': 'Agregar Tarea',
                'EDITTASKPLACEHOLDER': "Neuvo nombre de la tarea",
                'TASKCOMPLETED': 'Borrar tareas completadas',
                'BACKBUTTON': 'Regresar a Mis Listas',
                //Settings Translations
                'SELECTHEADER': 'Adjustes del App',
                'SELECTDIV': 'Cambiar los adjustes del App',
                'BACKGROUND': 'Estilo del fondo',
                'LANGUAGE': 'Idioma',
                'SETTINGSAPPLY': 'Guardar Estilos',
                //About Translations
                'ABOUTHEADER': 'Informacion',
                'ABOUTDIV': 'Informacion de este App',
                'ABOUTPARAGRAPH1': "Este es una aplicacion de tareas disenada para exhibir y mostrar mi experiencia en el marco AngularJS.",
                'ABOUTPARAGRAPH2': "Se Debe Gracias al programa de \"Desarrollo de Diseno Web\" de MATC y tambien a AngularJS por su excelente documentacion.",
                //No-Data Translations
                'NODATA': 'No hay elementos que mostrar',
                //General Translations
                'EDIT': 'Cambiar',
                'APPLY': 'Guardar',
                //Login Translations
                'LOGIN' : 'Iniciar sesion'

            });
            $translateProvider.translations('fr', {
                //Index Translations
                'LISTS': 'Listes',
                'ABOUT': 'Information',
                'SETTINGS': 'Parametres',
                //List Translations
                'LISTHEADER': 'Mes listes',
                'LISTPLACEHOLDER': 'Nom de la liste',
                'LISTADD': 'Ajouter la liste',
                'EDITLISTPLACEHOLDER': "Nouveau nom de la liste",
                'LISTCOMPLETED': 'Supprimer les listes completees',
                //Task Translations
                'TASKHEADER': 'Liste',
                'TASKPLACEHOLDER': 'Le nom de la tache',
                'TASKADD': 'Ajouter une tache',
                'EDITTASKPLACEHOLDER': "Nouveau nom de la tache",
                'TASKCOMPLETED': 'Supprimer les taches completees',
                'BACKBUTTON': 'Retour a mes listes',
                //Settings Translations
                'SELECTHEADER': "Parametres de l'application",
                'SELECTDIV': 'Modifiez les reglages App',
                'BACKGROUND': "Le style d'arriere-plan",
                'LANGUAGE': 'Langue',
                'SETTINGSAPPLY': 'Garder les styles',
                //About Translations
                'ABOUTHEADER': 'Information',
                'ABOUTDIV': 'Les informations de ce Application',
                'ABOUTPARAGRAPH1': "Ceci est une application concue pour afficher les taches et montrer mon experience dans le cadre de AngularJS.",
                'ABOUTPARAGRAPH2': "Merci au programme \"Conception Web \" du MATC et aussi a AngularJS pour son excellente documentation.",
                //No-Data Translations
                'NODATA': "Pas d'elements pour afflicher",
                //General Translations
                'EDIT': 'editer',
                'APPLY': 'Garder',
                //Login Translations
                'LOGIN' : "S'identifier"


            });
            $translateProvider.preferredLanguage('en');

        })

})();