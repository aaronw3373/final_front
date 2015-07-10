(function pictureFactoryIIFE(){

  // Create a picture factory
  var pictureFactory = function($http, $location, appSettings){
    var factory = {};
    factory.pictures = [];
    factory.picture = {};
    factory.display = "displayNone";

    factory.getPicture = function(picture){
      angular.copy(picture, factory.picture);
    };

    factory.getPictures = function(){
      var url = appSettings.url + '/picture/allPictures';
      return  $http.get(url).success(function(res){
        factory.display = "displayInline";
        angular.copy(res, factory.pictures);
        angular.copy(factory.pictures[(Math.floor(Math.random() * (factory.pictures.length)))], factory.picture)
      });
    };

    factory.makeProfilePicture = function(src){
      var url = appSettings.url + '/user/makeProfilePicture/' + src;
      return $http.get(url).success(function(res){
        $location.path('/home');
      });
    }

    return factory;
  };

  pictureFactory.$inject = ['$http', '$location', 'appSettings'];

  angular.module('finalApp').factory('pictureFactory', pictureFactory);
})();
