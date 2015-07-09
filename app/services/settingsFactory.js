(function settingsFactoryIIFE(){

  var settingsFactory = function($http, $location, appSettings){
    var factory = {};
    factory.display = "displayNone";

    factory.showSettings = function(){
      console.log("Settings");
    }
    return factory;
  };

  settingsFactory.$inject = ['$http', '$location', 'appSettings'];

  angular.module('finalApp').factory('settingsFactory', settingsFactory);
})();
