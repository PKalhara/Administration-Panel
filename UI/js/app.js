var myApp = angular.module('myApp', ['ngRoute']);


myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/login', {
      templateUrl: 'views/index.html',
      controller: 'LoginController'
    }).
    otherwise({
      redirectTo: '/login'
    });



}]);
