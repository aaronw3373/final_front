(function newTripDirectiveIIFE(){

  var newTrip = function(){

    return {
      restrict: 'E',
      templateUrl: 'app/views/newTrip.html',
      controller: 'tripController',
      controllerAs: 'tripCtrl',
      bindToController: true,
    }
  }

 // The directive is part of the module.
 angular.module('finalApp').directive('newTrip', newTrip);

})();
