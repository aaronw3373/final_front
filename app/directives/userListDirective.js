(function userListDirectiveIIFE(){

  var userList = function(){

    return {
      restrict: 'E',
      templateUrl: 'app/views/user-list.html',
      controller: 'usersController',
      controllerAs: 'usersCtrl',
      bindToController: true,
    }
  }

 // The directive is part of the module.
 angular.module('finalApp').directive('userList', userList);

})();
