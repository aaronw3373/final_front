(function pictureControllerIIFE(){

  var pictureController = function(pictureFactory, appSettings){
    this.picture = pictureFactory.picture;
    this.pictures = pictureFactory.pictures;
    this.newPic = {};
    this.newPic.src = undefined;
    this.sig = pictureFactory.sig;
    var done = false;

    this.save = function(){
      if (this.newPic.src && !done){
        done = true;
        var data = {
          src: this.newPic.src,
          caption: this.newPic.caption
        }
        pictureFactory.save(data);
      }
    }

    this.displayPics = function(){
      return pictureFactory.display;
    }

    this.getPicture = function(picture){
      pictureFactory.getPicture(picture);
    }

    this.makeProfilePicture = function(src){
      pictureFactory.makeProfilePicture(src);
    }
  };

 pictureController.$inject = ['pictureFactory', 'appSettings'];

 // The Controller is part of the module.
 angular.module('finalApp').controller('pictureController', pictureController);

})();
