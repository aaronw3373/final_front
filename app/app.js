(function finalAppIIFE(){
  var app = angular.module('finalApp', ['ngRoute']);

  app.config(function($routeProvider){
    $routeProvider
      .when('/',
            {
              controller: 'loginController',
              controllerAs: 'loginCtrl',
              templateUrl: 'app/views/login.html'
            }
           )
      .when('/signup',
            {
              controller: 'signupController',
              controllerAs: 'signupCtrl',
              templateUrl: 'app/views/signup.html'
            }
           )
      .when('/home',
            {
              controller:'userController',
              controllerAs: 'userCtrl',
              templateUrl: 'app/views/home.html'
            }
           )
      .otherwise({redirectTo: '/'});
  }).config(['$httpProvider', function($httpProvider){
    $httpProvider.defaults.withCredentials = true;
  }]);

})();
