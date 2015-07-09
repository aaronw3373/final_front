(function settingsControllerIIFE(){

  var settingsController = function(settingsFactory, appSettings){
    this.display = function(){
      return settingsFactory.display;
    }

  };

 settingsController.$inject = ['settingsFactory', 'appSettings'];

 // The Controller is part of the module.
 angular.module('finalApp').controller('settingsController', settingsController);

})();
