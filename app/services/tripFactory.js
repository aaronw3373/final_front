(function tripFactoryIIFE(){

  // Create a trip factory
  var tripFactory = function($http, $location, appSettings){
    var factory = {};
    factory.trips = [];
    factory.trip = {};
    factory.newTripPeople = [];


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

    factory.findPerson = function(search){
      console.log(search);
      // var url = appSettings.url + '/search/newTrip';
      // return  $http.post(url, trip).success(function(res){
      //   console.log(res);
      // });
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
