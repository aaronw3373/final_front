(function pictureControllerIIFE(){

  var pictureController = function(pictureFactory, appSettings){
    this.pictures = pictureFactory.pictures;

  };

 pictureController.$inject = ['pictureFactory', 'appSettings'];

 // The Controller is part of the module.
 angular.module('finalApp').controller('pictureController', pictureController);

})();
