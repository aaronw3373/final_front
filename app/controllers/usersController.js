(function usersControllerIIFE(){

  var usersController = function(usersFactory, appSettings){
    this.users = usersFactory.users;
    this.user = usersFactory.user;
  };

 usersController.$inject = ['usersFactory', 'appSettings'];

 // The Controller is part of the module.
 angular.module('finalApp').controller('usersController', usersController);

})();
