(function tripDirectiveIIFE(){

  var trip = function(){

    return {
      restrict: 'E',
      templateUrl: 'app/views/trip.html',
      controller: 'tripController',
      controllerAs: 'tripCtrl',
      bindToController: true,
    }
  }

 // The directive is part of the module.
 angular.module('finalApp').directive('trip', trip);

})();
