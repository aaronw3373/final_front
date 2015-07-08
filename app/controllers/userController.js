(function userControllerIIFE(){

  var userController = function(userFactory, appSettings, usersFactory){
    this.user = userFactory.user;

    function init(){
      userFactory.getUser();
    }
    init();

    this.displayNone = function(){
      return "displayNone";
    }

    this.showPictures = function(){
      pictureFactory.getPictures();
    }
    this.getAllUsers = function(){
      usersFactory.getUsers();
    };
    this.getFriends = function(){
      usersFactory.getFriends();
    };
    this.getFollowers = function(){
      usersFactory.getFollowers();
    };


    this.logout = function(){
      userFactory.logout();
    };

  };

 userController.$inject = ['userFactory', 'appSettings', 'usersFactory'];

 // The Controller is part of the module.
 angular.module('finalApp').controller('userController', userController);

})();
