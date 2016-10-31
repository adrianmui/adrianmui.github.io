var app = angular.module('app', ["ui.router"]);

app.factory('_', ['$window', function($window) {
  return $window._;
}]);

app.config(function($stateProvider, $urlRouterProvider) {
  // $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('normal' , {
      url: '',
      views: {
        "@": {
          templateUrl: "templates/some.html",
          controller: "someCtrl"
        }
      },
    })  
});

app.run(function($rootScope){
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});