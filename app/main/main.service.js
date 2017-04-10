/**
 * Created by shruti.aggarwal on 8/4/16.
 */
(function() {
  'use strict';

  angular
    .module('app')
    .service('MainService', MainService);

  /** @ngInject */
  function MainService($q, $http, $filter) {

    this.loadAdv = loadAdv;
    this.loadCamp = loadCamp;
    this.setDetailsForSelectedAdvId = setDetailsForSelectedAdvId;
    this.selectedAdv;
    this.campList = [];

    function loadAdv(){
      var deferred = $q.defer();
      $http.get('assets/data/adv_json_data.json')
          .then(function(response){
            deferred.resolve(response.data);
          });
      return deferred.promise;
    }

    function loadCamp(){
      var deferred = $q.defer();
      $http.get('assets/data/banner_camp_data.json')
          .then(function(response){
            deferred.resolve(response.data);
          });
      return deferred.promise;
    }

    function setDetailsForSelectedAdvId(advId){
        this.selectedAdv = this.campList[advId];
       return this.selectedAdv;
    }
  }
})();
