var app = angular.module("ProjectApp", ['ngRoute']);

app.config(['$routeProvider',
  function ($routeProvider) {
      $routeProvider.
          when('/service', {
              templateUrl: 'home.html',
             // controller: 'HomeController'
          })
  }]);