(function tripControllerIIFE(){

  var tripController = function(tripFactory, appSettings){
    this.trips = tripFactory.trips;
    this.trip = tripFactory.trip;
    this.sortBy = "startDate";
    this.newTrip = {};
    this.newTrip.title = undefined;
    this.newTrip.info = undefined;
    this.newTrip.startDate = undefined;
    this.newTrip.endDate = undefined;
    this.newTrip.location = undefined;
    this.newTrip.people = tripFactory.newTripPeople;
    this.person = undefined;
    this.message = undefined;
    this.noEdit = function(){return tripFactory.noEdit};
    this.edit = function(){return tripFactory.edit};
    this.updateTrip =function(){
      tripFactory.updateTrip(this.newTrip);
    }
    this.showEdit = function(){
      tripFactory.showEdit();
    }
    this.showNoEdit = function(){
      tripFactory.showNoEdit();
    }

    this.search = {};
    this.search.title = undefined;
    this.search.user = undefined;

    this.makeSearch = function(){
      tripFactory.makeSearch(this.search);
    }

    this.doSort = function(propName){
      this.sortBy = propName;
    };

    this.displayTrip = function(){
      return tripFactory.displayTrip;
    }
    this.displayTrips = function(){
      return tripFactory.displayTrips;
    }
    this.displayNewTrip = function(){
      return tripFactory.displayNewTrip;
    }

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
