/**
 * Created by shrutiaggarwal on 17/3/17.
 */
(function () {
    angular.module('app')
        .config(routeConfig);

    function routeConfig($stateProvider, $urlRouterProvider){
        $stateProvider
            .state('base', {
                url: '/base',
                templateUrl: 'app/base/base.html',
                controller: 'BaseController',
                controllerAs: 'vm'
            })
            .state('base.charts', {
                url: '/charts',
                controller: 'ChartsController',
                controllerAs: 'vm',
                templateUrl: 'app/charts/charts.html'
            })
            .state('base.home', {
                url: '/home',
                templateUrl: 'app/main/main.html',
                controller: 'MainController',
                controllerAs: 'vm',
                resolve: {
                    advData: function(MainService){
                        return MainService.loadAdv();
                    },
                    campData: function(MainService){
                        return MainService.loadCamp();
                    }
                }
            });

        $urlRouterProvider.when('', '/base/home');
        $urlRouterProvider.otherwise('/base/home');
    }
})();