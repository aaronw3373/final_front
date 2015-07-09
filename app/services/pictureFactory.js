(function pictureFactoryIIFE(){

  // Create a picture factory
  var pictureFactory = function($http, $location, appSettings){
    var factory = {};
    factory.pictures = [];
    factory.picture = {};
    // factory.display = "displayNone";

    factory.getPicture = function(picture){
      console.log(picture);
      // var url = appSettings.url + '/auth/picture';
      // return  $http.get(url).success(function(res){
      //   if (res.message === "unAuthenticated"){
      //      $location.path('/');
      //   } else {
      //     angular.copy(res, factory.picture);
      //   }
      // }).error(function(err){
      //     $location.path('/');
      // });
    };

    factory.getPictures = function(){
      console.log("get Pictures");
      // var url = appSettings.url + '/auth/picture';
      // return  $http.get(url).success(function(res){
      //   if (res.message === "unAuthenticated"){
      //      $location.path('/');
      //   } else {
      //     angular.copy(res, factory.picture);
      //   }
      // }).error(function(err){
      //     $location.path('/');
      // });
    };

    return factory;
  };

  pictureFactory.$inject = ['$http', '$location', 'appSettings'];

  angular.module('finalApp').factory('pictureFactory', pictureFactory);
})();
