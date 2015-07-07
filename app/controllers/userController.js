(function userControllerIIFE(){

  var userController = function(userFactory, appSettings, pictureFactory){
    this.user = userFactory.user;

    function init(){
      userFactory.getUser();
    }
    init();

    this.showPictures = function(){
      pictureFactory.getPictures();
    }

    this.logout = function(){
      userFactory.logout();
    };

  };

 userController.$inject = ['userFactory', 'appSettings', 'pictureFactory'];

 // The Controller is part of the module.
 angular.module('finalApp').controller('userController', userController);

})();
