(function loginFactoryIIFE(){

  // Create a customers factory
  var loginFactory = function($http, $location, appSettings){
    var factory = {};

    factory.postLogin = function(data){
      var url = appSettings.url + '/auth/login';
      return  $http.post(url, data).success(function(res){
        $location.path('/home');
      });
    };

    return factory;
  };

  loginFactory.$inject = ['$http','$location', 'appSettings'];

  angular.module('finalApp').factory('loginFactory', loginFactory);
})();
