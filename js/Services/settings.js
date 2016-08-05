(function() {
    angular.module('App')
        .service('settingsService', function ($localStorage, $translate) {

            //This function establishes the parameters for each load
            function onInit () {
                if ($localStorage.language) {
                    $translate.use($localStorage.language);
                }
                //This IF-Statement establishes the default user Style
                if (!$localStorage.style) {
                    $localStorage.style = {
                        "background": "url('images/backgrounds/bamboo.jpg') no-repeat center center fixed",
                        "background-size": "cover"
                    };
                }
            }
            
            onInit();

            //Declared Variables for the App to Function
            var languages = [
                {
                    language: 'English',
                    key: 'en'
                },
                {
                    language: 'Espanol',
                    key: 'es'
                },
                {
                    language: 'Francais',
                    key: 'fr'
                }];

            var styleOptions = [
                {
                    style: 'Bamboo',
                    url: 'images/backgrounds/bamboo.jpg'
                },
                {
                    style: 'Wood',
                    url: 'images/backgrounds/wood.jpg'
                },
                {
                    style: 'Fire',
                    url: 'images/backgrounds/fire.jpg'
                },
                {
                    style: 'Pokemon',
                    url: 'images/backgrounds/pokemon.jpg'
                },
                {
                    style: 'Love',
                    url: 'images/backgrounds/love.jpg'
                }
            ];
            var selectedStyle = $localStorage.style;

            //all Serivce functions are shown according to alphabetical order  

            //Getting Languages to display to the view
            this.getLanguages = function () {
                return languages;
            };

            //This will get the Style Options for the App
            this.getSelectedStyle = function () {
                return selectedStyle;
            };

            //This will get the Style Options for the App
            this.getStyles = function () {
                return styleOptions;
            };

            //This sets the App Language
            this.setLanguage = function(language) {
                $translate.use(language);
                $localStorage.language = language;
            };

            //This sets the App Style
            this.setStyle = function (style) {
                selectedStyle = {
                    "background": "url('" + style + "') no-repeat center center fixed",
                    "background-size": "cover"
                };
                $localStorage.style = selectedStyle;
            };
            
        });
})();