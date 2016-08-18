/**
 * Created by loganhendricks on 7/26/16.
 */

(function(){
angular.module('App')
    .filter('custom', function() {

        return function(input) {

            if(typeof input === 'string') {
               var strArray = input.split(' ');
                for (var i = 0; i < strArray.length; i++) {
                    var result = '';
                    for (var j = 0; j < strArray[i].length; j++) {
                        if (j === 0) {
                            var firstLetter = strArray[i][j].toUpperCase();
                            result = firstLetter;
                        }
                        else {
                            var otherLetters = strArray[i][j].toLowerCase();
                            result = result + otherLetters;
                        }
                    }
                    strArray[i] = result;
                }

                var newString = strArray.join(' ');
                return newString;
            }
        }

    });

})();