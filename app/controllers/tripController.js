(function tripControllerIIFE(){

  var tripController = function(tripFactory, appSettings){
    this.trips = tripFactory.trips;
    this.trip = tripFactory.trip;
    this.newTrip = {};
    this.newTrip.title = undefined;
    this.newTrip.info = undefined;
    this.newTrip.startDate = undefined;
    this.newTrip.endDate = undefined;
    this.newTrip.location = undefined;
    this.newTrip.people = tripFactory.newTripPeople;
    this.person = undefined;
    this.message = undefined;

    this.getTrips = function(){
     tripFactory.getTrips();
    };
    this.getTrip = function(id){
     tripFactory.getTrip(id);
    };

    this.findPerson = function(){
      if (this.person){
        tripFactory.findPerson(this.person);
      }
    };

    this.postTrip = function(){
      if(this.newTrip.title && this.newTrip.info && this.newTrip.startDate && this.newTrip.endDate && this.newTrip.location&& this.newTrip.people){
        tripFactory.newTrip(this.newTrip);
      } else {
          this.message = "Please fill all fields with valid data";
        }
    };

    this.getCSS = function(inputFieldValue){
      if (inputFieldValue.$pristine){
        return "";
      }
      return inputFieldValue.$valid ? "fieldValid" : "fieldInvalid";
    };

  };

 tripController.$inject = ['tripFactory', 'appSettings'];

 angular.module('finalApp').controller('tripController', tripController);

})();
