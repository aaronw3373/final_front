(function settingsDirectiveIIFE(){

  var settings = function(){

    return {
      restrict: 'E',
      templateUrl: 'app/views/settings.html',
      controller: 'settingsController',
      controllerAs: 'settingsCtrl',
      bindToController: true,
    }
  }

 // The directive is part of the module.
 angular.module('finalApp').directive('settings', settings);

})();
