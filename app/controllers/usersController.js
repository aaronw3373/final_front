(function usersControllerIIFE(){

  var usersController = function(usersFactory, appSettings, userFactory){
    this.users = usersFactory.users;
    this.user = usersFactory.user;

    this.display = function(){
      return usersFactory.display;
    }

    this.getUser = function(username){
      usersFactory.getUser(username);
    }
    this.newFollow = function(username){
      usersFactory.newFollow(username);
    }
  };

 usersController.$inject = ['usersFactory', 'appSettings','userFactory'];

 // The Controller is part of the module.
 angular.module('finalApp').controller('usersController', usersController);

})();
