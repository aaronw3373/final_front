(function tripFactoryIIFE(){

  // Create a trip factory
  var tripFactory = function($http, $location, appSettings){
    var factory = {};
    factory.trips = [];
    factory.trip = {};


    factory.getTrips = function(){
      var url = appSettings.url + '/trip/all';
      return  $http.get(url).success(function(res){
        if (res.message === "unAuthenticated"){
           $location.path('/');
        } else {
          angular.copy(res, factory.trips);
        }
      }).error(function(err){
          $location.path('/');
      });
    };


    factory.getTrip = function(){

      // angular.copy(res, factory.trip);
    }

    factory.newTrip = function(trip){
      var url = appSettings.url + '/trip/new';
      return  $http.post(url, trip).success(function(res){
        console.log(res);
      });
    }

    return factory;
  };

  tripFactory.$inject = ['$http', '$location', 'appSettings'];

  angular.module('finalApp').factory('tripFactory', tripFactory);
})();
