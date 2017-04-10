/**
 * Created by shrutiaggarwal on 10/4/17.
 */
/**
 * Created by shrutiaggarwal on 10/4/17.
 */

(function() {
    'use strict';
    angular
        .module('app')
        .controller('BaseController', BaseController);

    /** @ngInject */
    function BaseController($state) {
        init();

        function  init(){
            $state.go('base.home');
        }

        var vm = this;
        vm.go = function(state){
            debugger;
            $state.go(state, {reload: true});
        }
    }
})();
