(function messageFactoryIIFE(){

  // Create a message factory
  var messageFactory = function($http, $location, appSettings){
    var factory = {};
    factory.messages = [];
    factory.message = {};
    factory.display = "displayNone";

    factory.getMessage = function(message){
      console.log(message)
      // var url = appSettings.url + '/auth/message';
      // return  $http.get(url).success(function(res){
      //   if (res.message === "unAuthenticated"){
      //      $location.path('/');
      //   } else {
      //     angular.copy(res, factory.message);
      //   }
      // }).error(function(err){
      //     $location.path('/');
      // });
    };

    factory.getMessages = function(){
      console.log("get Messages")
      // var url = appSettings.url + '/auth/message';
      // return  $http.get(url).success(function(res){
      //   if (res.message === "unAuthenticated"){
      //      $location.path('/');
      //   } else {
      //     angular.copy(res, factory.message);
      //   }
      // }).error(function(err){
      //     $location.path('/');
      // });
    };

    return factory;
  };

  messageFactory.$inject = ['$http', '$location', 'appSettings'];

  angular.module('finalApp').factory('messageFactory', messageFactory);
})();
