(function signupControllerIIFE(){

  var signupController = function(signupFactory, appSettings){
    this.signup = {};
    this.signup.username = undefined;
    this.signup.password = undefined;
    this.signup.email = undefined;
    this.signup.firstName = undefined;
    this.signup.lastName = undefined;
    this.message = undefined;

    this.postSignup = function(){
      if(this.signup.password && this.signup.username && this.signup.email && this.signup.firstName && this.signup.lastName){
        signupFactory.postsignup(this.signup);
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

 signupController.$inject = ['signupFactory', 'appSettings'];

 // The Controller is part of the module.
 angular.module('finalApp').controller('signupController', signupController);

})();
