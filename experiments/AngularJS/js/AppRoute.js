var app = angular.module("HomeApp", ['ngRoute']);

app.config(['$routeProvider',
  function ($routeProvider) {
      $routeProvider.
          when('/home', {
              templateUrl: 'home/home.html',
              controller: 'HomeController'
          }).
        when('/Paul', {
            templateUrl: 'home/PaulPierce.html'
        }).
        when('/Kevin', {
            templateUrl: 'home/KevinGarnett.html'
        })
      .
        when('/Doc', {
            templateUrl: 'home/Doc.html'
        })
  }]);