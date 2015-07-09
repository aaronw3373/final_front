(function pictureDirectiveIIFE(){

  var pictureList = function(){

    return {
      restrict: 'E',
      templateUrl: 'app/views/pictures.html',
      controller: 'pictureController',
      controllerAs: 'pictureCtrl',
      bindToController: true,
    }
  }

 // The directive is part of the module.
 angular.module('finalApp').directive('pictureList', pictureList);

})();
