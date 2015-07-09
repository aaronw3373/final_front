(function pictureControllerIIFE(){

  var pictureController = function(pictureFactory, appSettings){
    this.picture = pictureFactory.picture;
    this.pictures = pictureFactory.pictures;

    this.display = function(){
      return pictureFactory.display;
    }

    this.getPicture = function(picture){
      pictureFactory.getPicture(picture);
    }

  };

 pictureController.$inject = ['pictureFactory', 'appSettings'];

 // The Controller is part of the module.
 angular.module('finalApp').controller('pictureController', pictureController);

})();
