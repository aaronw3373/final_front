(function usersFactoryIIFE(){

  // Create a users factory
  var usersFactory = function($http, $location, appSettings){
    var factory = {};
    factory.users = [];
    factory.user = {};
    factory.display = "displayNone";

    factory.getUser = function(username){
      var url = appSettings.url + '/user/' + username;
      return  $http.get(url).success(function(res){
        if (res.message === "unAuthenticated"){
           $location.path('/');
        } else {
          angular.copy(res, factory.user);
          factory.display = "displayInline";
        }
      }).error(function(err){
          $location.path('/');
      });
    };

    factory.getUsers = function(){
      var url = appSettings.url + '/user/';
      return  $http.get(url).success(function(res){
        if (res.message === "unAuthenticated"){
           $location.path('/');
        } else {
          angular.copy(res, factory.users);
          factory.display = "displayInline";
        }
      }).error(function(err){
          $location.path('/');
      });
    };

    factory.getFriends = function(){
      var url = appSettings.url + '/user/friends';
      return  $http.get(url).success(function(res){
        if (res.message === "unAuthenticated"){
           $location.path('/');
        } else {
          angular.copy(res, factory.users);
          factory.display = "displayInline";
        }
      }).error(function(err){
          $location.path('/');
      });
    };

    factory.getFollowers = function(){
      var url = appSettings.url + '/user/followers';
      return  $http.get(url).success(function(res){
        if (res.message === "unAuthenticated"){
           $location.path('/');
        } else {
          angular.copy(res, factory.users);
          factory.display = "displayInline";
        }
      }).error(function(err){
          $location.path('/');
      });
    };

    return factory;
  };

  usersFactory.$inject = ['$http', '$location', 'appSettings'];

  angular.module('finalApp').factory('usersFactory', usersFactory);
})();
