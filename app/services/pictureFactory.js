(function pictureFactoryIIFE(){

  // Create a picture factory
  var pictureFactory = function($http, $location, $window,appSettings){
    var factory = {};
    factory.newPic = {};
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
        $window.location.reload();
      });
    }

    // factory.createPicture = function(picture) {
    //   console.log(picture);
    //   var file = picture.image;
    //   return $upload.upload({
    //       url: 'http://localhost:3050/picture/upload',
    //       method: 'POST',
    //       fields: { 'picture[caption]': picture.caption },
    //       file: file,
    //       fileFormDataName: 'picture[image]'
    //   }).then(function(response){
    //     console.log(response);
    //   });
    // }

    return factory;
  };

  pictureFactory.$inject = ['$http', '$location', '$window' , 'appSettings'];

  angular.module('finalApp').factory('pictureFactory', pictureFactory);
})();
