(function userControllerIIFE(){

  var userController = function(userFactory, appSettings, usersFactory, tripFactory, messageFactory, pictureFactory, settingsFactory){
    this.user = userFactory.user;

    function init(){
      userFactory.getUser();
    }
    init();

    this.showPictures = function(){
      pictureFactory.getPictures();
    }
    this.showMessages = function(){
      messageFactory.getMessages();
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
    this.postNewTrip = function(){
      tripFactory.show();
    }
    this.getMyTrips = function(){
      tripFactory.getTrips()
    }
    this.showSettings = function(){
      settingsFactory.showSettings();
    }


    this.logout = function(){
      userFactory.logout();
    };

  };

 userController.$inject = ['userFactory', 'appSettings', 'usersFactory', 'tripFactory', 'messageFactory', 'pictureFactory','settingsFactory'];

 // The Controller is part of the module.
 angular.module('finalApp').controller('userController', userController);

})();
