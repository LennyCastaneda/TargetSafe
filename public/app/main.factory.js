(function() {
    'use strict';

    angular
        .module('myApp')
        .factory('MainFactory', MainFactory);

    MainFactory.$inject = ['$http', '$q'];

    /* @ngInject */
    function MainFactory($http, $q) {
        var url = "http://localhost:3000/api/records"
        var urlLookup = "http://localhost:3000/api/lookup/"
        var urlVenue = "http://localhost:3000/api/location/"

        var service = {
            addEntry: addEntry,
            vehicle_type: vehicle_type,
            charge: charge,
            tests_id: tests_id,
            crime_code: crime_code,
            ethnicity: ethnicity,
            gender: gender,
            location_type: location_type,
            occupation_status: occupation_status,
            other_substances: other_substances,
            stop_type: stop_type,
            vehicle_type: vehicle_type,
            police_dept_id: police_dept_id,
            ca_license_id: ca_license_id
        };
        return service;

        ////////////////

        function ca_license_id(){
            var defer = $q.defer();
             $http({
                method: "GET",
                url: urlVenue + 'SAN DIEGO'
            }).then(function(response) {
                    if (typeof response === 'object') {
                        defer.resolve(response);
                    } else {
                        defer.reject("No data found!");
                    }
                },
            function(error) {
                    defer.reject(error);
                });
             return defer.promise;
        }

        function vehicle_type(){
            var defer = $q.defer();
             $http({
                method: "GET",
                url: urlLookup + 'vehicle_type'
            }).then(function(response) {
                    if (typeof response === 'object') {
                        defer.resolve(response);
                    } else {
                        defer.reject("No data found!");
                    }
                },
            function(error) {
                    defer.reject(error);
                });
             return defer.promise;
        }

        function charge(){
            var defer = $q.defer();
             $http({
                method: "GET",
                url: urlLookup + 'charge'
            }).then(function(response) {
                    if (typeof response === 'object') {
                        defer.resolve(response);
                    } else {
                        defer.reject("No data found!");
                    }
                },
            function(error) {
                    defer.reject(error);
                });
             return defer.promise;
        }

        function tests_id(){
            var defer = $q.defer();
             $http({
                method: "GET",
                url: urlLookup + 'tests_id'
            }).then(function(response) {
                    if (typeof response === 'object') {
                        defer.resolve(response);
                    } else {
                        defer.reject("No data found!");
                    }
                },
            function(error) {
                    defer.reject(error);
                });
             return defer.promise;
        }

        function crime_code(){
            var defer = $q.defer();
             $http({
                method: "GET",
                url: urlLookup + 'crime_code'
            }).then(function(response) {
                    if (typeof response === 'object') {
                        defer.resolve(response);
                    } else {
                        defer.reject("No data found!");
                    }
                },
            function(error) {
                    defer.reject(error);
                });
             return defer.promise;
        }

        function ethnicity(){
            var defer = $q.defer();
             $http({
                method: "GET",
                url: urlLookup + 'ethnicity'
            }).then(function(response) {
                    if (typeof response === 'object') {
                        defer.resolve(response);
                    } else {
                        defer.reject("No data found!");
                    }
                },
            function(error) {
                    defer.reject(error);
                });
             return defer.promise;
        }

        function gender(){
            var defer = $q.defer();
             $http({
                method: "GET",
                url: urlLookup + 'gender'
            }).then(function(response) {
                    if (typeof response === 'object') {
                        defer.resolve(response);
                    } else {
                        defer.reject("No data found!");
                    }
                },
            function(error) {
                    defer.reject(error);
                });
             return defer.promise;
        }

        function location_type(){
            var defer = $q.defer();
             $http({
                method: "GET",
                url: urlLookup + 'location_type'
            }).then(function(response) {
                    if (typeof response === 'object') {
                        defer.resolve(response);
                    } else {
                        defer.reject("No data found!");
                    }
                },
            function(error) {
                    defer.reject(error);
                });
             return defer.promise;
        }

        function occupation_status(){
            var defer = $q.defer();
             $http({
                method: "GET",
                url: urlLookup + 'occupation_status'
            }).then(function(response) {
                    if (typeof response === 'object') {
                        defer.resolve(response);
                    } else {
                        defer.reject("No data found!");
                    }
                },
            function(error) {
                    defer.reject(error);
                });
             return defer.promise;
        }

        function other_substances(){
            var defer = $q.defer();
             $http({
                method: "GET",
                url: urlLookup + 'other_substances'
            }).then(function(response) {
                    if (typeof response === 'object') {
                        defer.resolve(response);
                    } else {
                        defer.reject("No data found!");
                    }
                },
            function(error) {
                    defer.reject(error);
                });
             return defer.promise;
        }

        function stop_type(){
            var defer = $q.defer();
             $http({
                method: "GET",
                url: urlLookup + 'stop_type'
            }).then(function(response) {
                    if (typeof response === 'object') {
                        defer.resolve(response);
                    } else {
                        defer.reject("No data found!");
                    }
                },
            function(error) {
                    defer.reject(error);
                });
             return defer.promise;
        }

        function vehicle_type(){
            var defer = $q.defer();
             $http({
                method: "GET",
                url: urlLookup + 'vehicle_type'
            }).then(function(response) {
                    if (typeof response === 'object') {
                        defer.resolve(response);
                    } else {
                        defer.reject("No data found!");
                    }
                },
            function(error) {
                    defer.reject(error);
                });
             return defer.promise;
        }

        function police_dept_id(){
            var defer = $q.defer();
             $http({
                method: "GET",
                url: urlLookup + 'police_dept_id'
            }).then(function(response) {
                    if (typeof response === 'object') {
                        defer.resolve(response);
                    } else {
                        defer.reject("No data found!");
                    }
                },
            function(error) {
                    defer.reject(error);
                });
             return defer.promise;
        }
        

        function addEntry(newEntry) {
            //converting time from UTC to local time
            var newTime = newEntry.arrest_time.toLocaleTimeString('en-US');
            //merging old UTC to newTime ()
            var updatedTime = {arrest_time: newTime}
            //console.log(updatedTime);
            //destination for update object
            var updateNewEntry ={};

            console.log(angular.merge(updateNewEntry, newEntry, updatedTime));
            console.log("update: " + updateNewEntry);







            var data  = angular.toJson(updateNewEntry, true);
            console.log(data);
            var defer = $q.defer();
            $http({
                    method: 'POST',
                    url: url,
                    headers: {
                        'Content-Type': 'application/json; charset=utf-8'
                    },
                    data: data
                })
                .then(function(response) {
                        if (typeof response.data === 'object') {
                            defer.resolve(response);
                        } else {
                            defer.reject('No data found!');
                        }
                    },
                    function(error) {
                        defer.reject(error);
                    });
            return defer.promise;
        }
    }
})();