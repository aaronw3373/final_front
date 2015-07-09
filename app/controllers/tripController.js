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
    this.newTrip.person = undefined;

    this.getTrips = function(){
     tripFactory.getTrips();
    }
    this.getTrip = function(){
     tripFactory.getTrip();
    }

    this.findPerson = function(){
      if (this.newTrip.person){
        tripFactory.findPerson(this.newTrip.person);
      }
    }

    this.newTrip = function(){
      if(this.newTrip.title && this.newTrip.info && this.newTrip.startDate && this.newTrip.endDate && this.newTrip.location&& this.newTrip.people){
        tripFactory.newTrip(this.newTrip);
      } else {
          this.message = "Please fill all fields with valid data";
        }
    };

    this.getCSS = function(inputFieldValue){
      // $pristine - field has not been changed
      if (inputFieldValue.$pristine){
        return "";
      }

      // valid will be true if the field is the field is valid
      return inputFieldValue.$valid ? "fieldValid" : "fieldInvalid";
    };

  }

 tripController.$inject = ['tripFactory', 'appSettings'];

 // The Controller is part of the module.
 angular.module('finalApp').controller('tripController', tripController);

})();
