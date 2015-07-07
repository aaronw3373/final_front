(function userFactoryIIFE(){

  // Create a customers factory
  var userFactory = function($http, $location, appSettings, $timeout){
    var factory = {};
    factory.user = {};

    factory.getUser = function(){
      var url = appSettings.url + '/auth/user';
      return  $http.get(url).success(function(res){
        if (res.message === "unAuthenticated"){
           $location.path('/');
        } else {
          angular.copy(res, factory.user);
        }
      }).error(function(err){
          $location.path('/');
      });
    };

    factory.logout = function(){
      var url = appSettings.url + '/auth/signout';
      return  $http.get(url).success(function(res){
         $location.path('/');
      });
    };

    return factory;
  };

  userFactory.$inject = ['$http', '$location', 'appSettings', '$timeout'];

  angular.module('finalApp').factory('userFactory', userFactory);
})();