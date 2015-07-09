(function tripFactoryIIFE(){

  // Create a trip factory
  var tripFactory = function($http, $location, appSettings){
    var factory = {};
    factory.trips = [];
    factory.trip = {};
    factory.newTripPeople = [];
    factory.displayTrip = "displayNone";
    factory.displayTrips = "displayNone";

    // factory.hideAll = function(){
    //   factory.displayTrip = "displayNone";
    //   factory.displayTrips = "displayNone";
    // }
    factory.show = function(){
      factory.displayTrips = "displayNone";
      factory.displayTrip = "displayInline";
    }

    factory.getTrips = function(){
      var url = appSettings.url + '/trip/all';
      return  $http.get(url).success(function(res){
        if (res.message === "unAuthenticated"){
           $location.path('/');
        } else {
          angular.copy(res, factory.trips);
          factory.displayTrip = "displayNone";
      factory.displayTrips = "displayInline";
        }
      }).error(function(err){
          $location.path('/');
      });
    };


    factory.getTrip = function(id){
      factory.trips.forEach(function(trip){
        if(trip._id === id){
          angular.copy(trip, factory.trip);
        }
      })
    };

    factory.findPerson = function(search){
      var data = {query: search};
      var url = appSettings.url + '/search/newTrip';
      return  $http.post(url, data).success(function(res){
        if (res.message === "unAuthenticated"){
           $location.path('/');
        } else {
          if (res){
            var repeat = false;
            factory.newTripPeople.forEach(function(username){
              if (username === res){
                repeat = true
              }
            })
            if (!repeat){
             factory.newTripPeople.push(res);
            }
          }
        }
      })
    };

    factory.newTrip = function(data){
      var url = appSettings.url + '/trip/newTrip';
      return  $http.post(url, data).success(function(res){
        if (res.message === "unAuthenticated"){
           $location.path('/');
        } else {
          angular.copy(res, factory.trip);
          factory.displayTrip = "displayNone";
          factory.displayTrips = "displayInline";
        }
      }).error(function(err){
          $location.path('/');
      });

    };

    return factory;
  };

  tripFactory.$inject = ['$http', '$location', 'appSettings', 'usersFactory'];

  angular.module('finalApp').factory('tripFactory', tripFactory);
})();
