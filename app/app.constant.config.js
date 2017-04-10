/**
 * Created by shrutiaggarwal on 18/3/17.
 */
(function(){
    angular.module('app')
        .constant('API_CONFIG', API_CONFIG());

    function API_CONFIG(){
        return {
            'baseUrl': 'https://jsonplaceholder.typicode.com'
        }
    }
})();