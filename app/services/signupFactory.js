(function signupFactoryIIFE(){

  var signupFactory = function($http, appSettings, $location){
    var factory = {};

    factory.postsignup = function(data){
      var url = appSettings.url + '/auth/signup';
      return  $http.post(url, data).success(function(res){
        $location.path('/');
      });
    };

    return factory;
  };

  signupFactory.$inject = ['$http', 'appSettings', '$location'];

  angular.module('finalApp').factory('signupFactory', signupFactory);
})();
