var myApp = angular.module('myApp', ['ngRoute']);


myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/login', {
      templateUrl: 'views/index.html',
      controller: 'LoginController'
    }).
   when('/analytics', {
      templateUrl: 'views/analitics.html',
      controller: 'AnalyticsController'
    }).
    otherwise({
      redirectTo: '/login'
    });



}]);

