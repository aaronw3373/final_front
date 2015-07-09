(function messageDirectiveIIFE(){

  var messages = function(){

    return {
      restrict: 'E',
      templateUrl: 'app/views/messages.html',
      controller: 'messageController',
      controllerAs: 'messageCtrl',
      bindToController: true,
    }
  }

 // The directive is part of the module.
 angular.module('finalApp').directive('messages', messages);

})();
