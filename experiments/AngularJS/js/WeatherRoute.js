var app = angular.module("WeatherApp", ['ngRoute']);


app.config(['$routeProvider',
  function ($routeProvider) {
      $routeProvider.
        when('/about', {
            templateUrl: 'partials/about.html'
        }).
        when('/contact', {
            templateUrl: 'partials/contact.html'
        }).
        otherwise({
            redirectTo: '/home'
        });
  }]);