(function messageControllerIIFE(){

  var messageController = function(messageFactory, appSettings){
    this.message = messageFactory.message;
    this.messages = messageFactory.messages;

    this.display = function(){
      return messageFactory.display;
    }

    this.getMessage = function(message){
      messageFactory.getMessage(message);
    }

  };

 messageController.$inject = ['messageFactory', 'appSettings'];

 // The Controller is part of the module.
 angular.module('finalApp').controller('messageController', messageController);

})();
