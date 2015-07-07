(function loginControllerIIFE(){

  var loginController = function(loginFactory, appSettings){
    this.login = {};
    this.login.username = undefined;
    this.login.password = undefined;
    this.message = undefined;

    this.postLogin = function(){
      if(this.login.password && this.login.username){
      loginFactory.postLogin(this.login);
      } else {
          this.message = "Please fill all fields with valid data";
        }
    };

    this.getCSS = function(inputFieldValue){
      // $pristine - field has not been changed
      if (inputFieldValue.$pristine){
        return "";
      }

      // valid will be true if the field is the field is valid
      return inputFieldValue.$valid ? "fieldValid" : "fieldInvalid";
    };


  };

 loginController.$inject = ['loginFactory', 'appSettings'];

 // The Controller is part of the module.
 angular.module('finalApp').controller('loginController', loginController);

})();
