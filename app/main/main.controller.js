(function() {
  'use strict';
  angular
    .module('app')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $filter, advData, campData, MainService) {
    var vm = this;
    vm.assignValueAndHide = assignValueAndHide;
    vm.search = search;

    vm.searchItems = advData;

    vm.suggestions = [];
    vm.selectedIndex = -1;

    init();
    function init(){
      debugger;
      MainService.campList = campData;
    }

    function search(){
      vm.suggestions = [];
      debugger;
      vm.suggestions = $filter('filter')(vm.searchItems, {'name': vm.searchText});
    }

    $scope.$watch('vm.selectedIndex',function(val){
      if(val !== -1) {
        vm.searchText = vm.suggestions[vm.selectedIndex].name;
        vm.selectedItem = vm.suggestions[vm.selectedIndex];
      }
    });

    function assignValueAndHide(index){
      var id = vm.suggestions[index].id;
      vm.searchText = vm.suggestions[index].name;
      debugger;
      vm.selectedItem = MainService.setDetailsForSelectedAdvId(id);
      vm.campaigns = vm.selectedItem.campaigns;
      vm.suggestions=[];
      localStorage.setItem('selectedBrand', JSON.stringify(vm.selectedItem));
    }
  }
})();
