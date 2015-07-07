(function signupFactoryIIFE(){

  // Create a customers factory
  var signupFactory = function($http, appSettings){
    var factory = {};

    factory.postsignup = function(data){
      var url = appSettings.url + '/auth/signup';
      return  $http.post(url, data).success(function(res){
        $location.path('/');
      });
    };

    return factory;
  };

  signupFactory.$inject = ['$http', 'appSettings'];

  angular.module('finalApp').factory('signupFactory', signupFactory);
})();
