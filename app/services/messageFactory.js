(function messageFactoryIIFE(){

  // Create a message factory
  var messageFactory = function($http, $location, appSettings){
    var factory = {};
    factory.messages = [];
    factory.message = {};
    factory.newConvoPeople = [];
    factory.display = "displayNone";

    factory.findPerson = function(search){
      console.log(search);
      // var data = {query: search};
      // var url = appSettings.url + '/search/newTrip';
      // return  $http.post(url, data).success(function(res){
      //   if (res.message === "unAuthenticated"){
      //      $location.path('/');
      //   } else {
      //     if (res){
      //       var repeat = false;
      //       factory.newConvoPeople.forEach(function(username){
      //         if (username === res){
      //           repeat = true;
      //         }
      //       })
      //       if (!repeat){
      //        factory.newConvoPeople.push(res);
      //       }
      //     }
      //   }
      // })
    };

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
      // var url = appSettings.url + '/auth/message';
      // return  $http.get(url).success(function(res){
      //   if (res.message === "unAuthenticated"){
      //      $location.path('/');
      //   } else {
        factory.display = "displayInline";
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
