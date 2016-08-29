(function() {
    'use strict';

    angular
        .module('myApp')
        .controller('MainController', MainController);

    MainController.$inject = ['MainFactory'];

    /* @ngInject */
    function MainController(MainFactory) {
        var vm = this;
        vm.title = 'MainController';
        vm.addEntry = addEntry;
   

        activate();

        ////////////////

        function activate() {  

            MainFactory.ca_license_id()
            .then (function(res){
              vm.ca_license_id = res.data.data;
            })

            MainFactory.vehicle_type()
             .then (function(response){
                     vm.vehicle_type = response.data.data;
                 })  
            MainFactory.charge()
             .then (function(response){
                     vm.charge = response.data.data;
                 }) 
            MainFactory.tests_id()
             .then (function(response){
                     vm.tests_id = response.data.data;
                 }) 
            MainFactory.crime_code()
             .then (function(response){
                     vm.crime_code = response.data.data;
                 }) 
            MainFactory.ethnicity()
             .then (function(response){
                     vm.ethnicity = response.data.data;
                 }) 
            MainFactory.gender()
             .then (function(response){
                     vm.gender = response.data.data;
                 }) 
            MainFactory.location_type()
             .then (function(response){
                     vm.location_type = response.data.data;
                 }) 
            MainFactory.occupation_status()
             .then (function(response){
                     vm.occupation_status = response.data.data;
                 })

            MainFactory.prior_dui_history()
                 .then (function(response){
                         vm.prior_dui_history = response.data.data;
                     })            

            MainFactory.other_substances()
             .then (function(response){
                     vm.other_substances = response.data.data;
                 }) 
            MainFactory.stop_type()
             .then (function(response){
                     vm.stop_type = response.data.data;
                 }) 
            MainFactory.police_dept_id()
             .then (function(response){
                     vm.police_dept_id = response.data.data;
                 }) 
        }

        //Adding new entry
        function addEntry(newEntry) {
            MainFactory.addEntry(newEntry)
                .then(function(response) {
                        response;
                    },
                    //added toastr for error handling
                    function(error) {
                        if (typeof error === 'object') {
                            toastr.error('There was a problem: ' + error.data);
                        } else {
                            toastr.info(error);
                        }
                    }
                )
        }


    }
})();