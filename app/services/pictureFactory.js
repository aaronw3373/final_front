(function pictureFactoryIIFE(){

  // Create a picture factory
  var pictureFactory = function($http, $location, $window,appSettings){
    var factory = {};
    factory.newPic = {};
    factory.pictures = [];
    factory.picture = {};
    factory.display = "displayNone";
    factory.sig = {};

    factory.show = function(){
      factory.display = "displayInline";
    }
    factory.hide = function(){
      factory.display = "displayNone";
    }
    factory.getPicture = function(picture){
      angular.copy(picture, factory.picture);
    };

    factory.getPictures = function(){
      var url = appSettings.url + '/picture/allPictures';
      return  $http.get(url).success(function(res){
        factory.display = "displayInline";
        angular.copy(res, factory.pictures);
        angular.copy(factory.pictures[(Math.floor(Math.random() * (factory.pictures.length)))], factory.picture)
        factory.show();
      });
    };

    factory.makeProfilePicture = function(src){
      var url = appSettings.url + '/user/makeProfilePicture';
      var data = {src: src}
      return $http.post(url, data).success(function(res){
        $window.location.reload();
      });
    }
    factory.save = function(data){
      var url = appSettings.url + '/picture/save';
      return $http.post(url, data).success(function(res){
          factory.getPictures();
      }).error(function(err){
          $location.path('/');
      });
    }

    return factory;
  };

  pictureFactory.$inject = ['$http', '$location', '$window' , 'appSettings'];

  angular.module('finalApp').factory('pictureFactory', pictureFactory);
})();
