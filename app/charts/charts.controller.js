/**
 * Created by shrutiaggarwal on 10/4/17.
 */

(function() {
    'use strict';
    angular
        .module('app')
        .controller('ChartsController', ChartsController);

    /** @ngInject */
    function ChartsController(MainService) {
        init();

        function  init(){

            //var data = MainService.selectedAdv;
            var data = JSON.parse(localStorage.getItem('selectedBrand'));

            debugger;
            if(data == null || data.campaigns == []){return ;}
            var dataPoints = [];
            for(var i=0; i< data.campaigns.length; i++){
                dataPoints.push({
                    x:i, y:i, z: data.campaigns[i].budget
                })
            }
            var chart = new CanvasJS.Chart("chartContainer", {
                title: {
                    text: "Budget comparison in campaigns"
                },
                data: [
                    {
                        type: "bubble",
                        dataPoints: dataPoints
                    }
                ]
            });
            chart.render();
        }
    }
})();
