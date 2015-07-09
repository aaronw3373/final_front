(function tripsDirectiveIIFE(){

  var trips = function(){

    return {
      restrict: 'E',
      templateUrl: 'app/views/myTrips.html',
      controller: 'tripController',
      controllerAs: 'tripCtrl',
      bindToController: true,
    }
  }

 // The directive is part of the module.
 angular.module('finalApp').directive('trips', trips);

})();
