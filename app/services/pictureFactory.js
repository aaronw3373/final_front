(function pictureFactoryIIFE(){

  // Create a customers factory
  var pictureFactory = function($http, appSettings){
    var factory = {};
    factory.pictures = []

    factory.getPictures = function(){
      var url = appSettings.url + '/picture/allPictures';
      return  $http.get(url).success(function(res){
        angular.copy(res, factory.pictures);
      });
    }

    return factory;
  };

  pictureFactory.$inject = ['$http', 'appSettings'];

  angular.module('finalApp').factory('pictureFactory', pictureFactory);
})();
