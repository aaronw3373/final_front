(function userControllerIIFE(){

  var userController = function(userFactory, appSettings, usersFactory, tripFactory,pictureFactory, settingsFactory){
    this.user = userFactory.user;


    function init(){
      userFactory.getUser();
      tripFactory.findAwesome();
    }
    init();

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


    this.postAwesome = function(){
      settingsFactory.hideSettings();
      tripFactory.showNewTrip();
    }
    this.getMyAwesome = function(){
      settingsFactory.hideSettings();
      tripFactory.getMyAwesome();
    }
    this.findAwesome = function(){
      settingsFactory.hideSettings();
      tripFactory.findAwesome();
    }
    this.getRandom = function(){
      settingsFactory.hideSettings();
      tripFactory.getRandom();
    }


    this.showSettings = function(){
      tripFactory.showNone();
      settingsFactory.showSettings();
    }

    this.logout = function(){
      userFactory.logout();
    };

  };

 userController.$inject = ['userFactory', 'appSettings', 'usersFactory', 'tripFactory', 'pictureFactory','settingsFactory'];

 // The Controller is part of the module.
 angular.module('finalApp').controller('userController', userController);

})();
