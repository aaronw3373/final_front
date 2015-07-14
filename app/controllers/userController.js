(function userControllerIIFE(){

  var userController = function(userFactory, appSettings, usersFactory, tripFactory,pictureFactory, settingsFactory){
    this.user = userFactory.user;


    function init(){
      userFactory.getUser();
      tripFactory.makeSearch({});
    }
    init();

    this.getAllUsers = function(){
      usersFactory.getUsers();
    };
    this.getFriends = function(){
      usersFactory.getFriends();
    };
    this.getFollowers = function(){
      usersFactory.getFollowers();
    };

    this.showPictures = function(){
      pictureFactory.hide();
      settingsFactory.hideSettings();
      tripFactory.showNone();
      pictureFactory.getPictures();
    }
    this.postAwesome = function(){
      pictureFactory.hide();
      settingsFactory.hideSettings();
      tripFactory.showNewTrip();
    }
    this.getMyAwesome = function(){
      pictureFactory.hide();
      settingsFactory.hideSettings();
      tripFactory.getMyAwesome();
    }
    this.findAwesome = function(){
      pictureFactory.hide();
      settingsFactory.hideSettings();
      tripFactory.showTrips();
    }
    this.getRandom = function(){
      pictureFactory.hide();
      settingsFactory.hideSettings();
      tripFactory.getRandom();
    }
    this.showSettings = function(){
      pictureFactory.hide();
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
