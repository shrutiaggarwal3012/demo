/**
 * Created by shrutiaggarwal on 18/3/17.
 */
(function(){
    angular.module('app')
        .service('httpService', HttpService);

    function HttpService($q, $http, API_CONFIG){
        this.request = request;
        function request(method, url, data){
            var absoluteUrl = generateBaseUrl() +url;
            var deferred = $q.defer();
            $http({
                method: method,
                url: absoluteUrl,
                data: data}).
            then(function(response) {
                deferred.resolve(response);
            }, function(response) {
                deferred.reject(response);
            });
            return deferred.promise;
        }

        function generateBaseUrl(){
            return API_CONFIG.baseUrl;
        }
    }
})();