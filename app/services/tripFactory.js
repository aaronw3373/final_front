(function tripFactoryIIFE(){

  // Create a trip factory
  var tripFactory = function($http, $location, appSettings){
    var factory = {};
    factory.trips = [];
    factory.trip = {};
    factory.newTripPeople = [];
    factory.displayTrip = "displayNone";
    factory.displayTrips = "displayInline";
    factory.displayNewTrip = "displayNone";

    factory.showNewTrip = function(){
      factory.displayTrip = "displayNone";
      factory.displayTrips = "displayNone";
      factory.displayNewTrip = "displayInline";
    }
    factory.showTrip = function(){
      factory.displayTrip = "displayInline";
      factory.displayTrips = "displayNone";
      factory.displayNewTrip = "displayNone";
    }
    factory.showTrips = function(){
      factory.displayTrip = "displayNone";
      factory.displayTrips = "displayInline";
      factory.displayNewTrip = "displayNone";
    }

    factory.showNone = function(){
      factory.displayTrip = "displayNone";
      factory.displayTrips = "displayNone";
      factory.displayNewTrip = "displayNone";
    }


    factory.getMyAwesome = function(){
      var url = appSettings.url + '/trip/my';
      return  $http.get(url).success(function(res){
        if (res.message === "unAuthenticated"){
           $location.path('/');
        } else {
          angular.copy(res, factory.trips);
          factory.showTrips();
        }
      }).error(function(err){
          $location.path('/');
      });
    };

    factory.findAwesome = function(){
      var url = appSettings.url + '/trip/all';
      return  $http.get(url).success(function(res){
        if (res.message === "unAuthenticated"){
           $location.path('/');
        } else {
          angular.copy(res, factory.trips);
          factory.showTrips();
        }
      }).error(function(err){
          $location.path('/');
      });
    };

    factory.getRandom = function(){
      var url = appSettings.url + '/trip/random';
      return  $http.get(url).success(function(res){
        if (res.message === "unAuthenticated"){
           $location.path('/');
        } else {
          angular.copy(res, factory.trip);
          factory.showTrip();
        }
      }).error(function(err){
          $location.path('/');
      });
    };

    factory.getTrip = function(id){
      console.log(id);
      factory.trips.forEach(function(trip){
        if(trip._id === id){
          angular.copy(trip, factory.trip);
          factory.showTrip();
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
                repeat = true;
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
