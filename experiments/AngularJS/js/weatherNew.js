var app = angular.module("WeatherApp", ['ngRoute']);

app.config(['$routeProvider',
  function ($routeProvider) {
      $routeProvider.
          when('/MyFavoriteCity', {
              templateUrl: 'partials/MyFavoriteCity.html'
          }).
        when('/MyFavoriteCities', {
            templateUrl: 'partials/MyFavoriteCities.html'
        }).
        when('/WeatherSearch', {
            templateUrl: 'partials/WeatherSearch.html'
        })

  }]);

app.controller("WeatherController", function ($scope, $http) {

    $scope.visible = false;
    $scope.searchCity = function (city) {
        var city = $scope.searchByCity;
        $http.get("http://api.worldweatheronline.com/premium/v1/weather.ashx?num_of_days=3&q=" + city + "&tp=24&format=json&key=36c06e6c39199fdbb6b6ce4057719")
        .success(function (response) {
            // var currentcondition = response.data.current_condition[0];
            // var today = response.data.weather[0];
            //  var tomorrow = response.data.weather[1];

            // $scope.weather = { today: response.data.weather[0] };
            $scope.city = {
                currentcondition: response.data.current_condition[0],
                today: response.data.weather[0],
                tomorrow: response.data.weather[1],
                cityname: response.data.request[0].query,
            }
            $scope.visible = true;
            
            if ($scope.favoriteCities.indexOf($scope.city.cityname) === -1) {
                    angular.element(document.querySelector("#favorite")).removeClass("btn-danger").addClass("btn-warning");
                
            }
            else {
                angular.element(document.querySelector("#favorite")).attr("class", "btn btn-xs btn-danger col-sm-offset-1");
            }
        })
    }
   
    $scope.favoriteCities = [];
 

        $scope.addToFavorites = function (cityname) {
            var cityname=$scope.city.cityname
            if($scope.favoriteCities.indexOf(cityname)===-1){
                $scope.favoriteCities.push(cityname);
                angular.element(document.querySelector("#favorite")).removeClass("btn-warning").addClass("btn-danger");
            }
        }


    $scope.removefavoriteCities = function (cityname) {
        var index = $scope.favoriteCities.indexOf(cityname);
        $scope.favoriteCities.splice(index, 1);
    }

    $scope.searchMyCity = function (cityname) {
        $http.get("http://api.worldweatheronline.com/premium/v1/weather.ashx?num_of_days=3&q=" + cityname + "&tp=24&format=json&key=36c06e6c39199fdbb6b6ce4057719")
        .success(function (response) {
            // var currentcondition = response.data.current_condition[0];
            // var today = response.data.weather[0];
            //  var tomorrow = response.data.weather[1];

            // $scope.weather = { today: response.data.weather[0] };
            $scope.city = {
                currentcondition: response.data.current_condition[0],
                today: response.data.weather[0],
                tomorrow: response.data.weather[1],
                cityname: response.data.request[0].query,
            }
            $scope.visible = true;

            if ($scope.favoriteCities.indexOf($scope.city.cityname) === -1) {
                angular.element(document.querySelector("#favorite")).removeClass("btn-danger").addClass("btn-warning");

            }
            else {
                angular.element(document.querySelector("#favorite")).attr("class", "btn btn-xs btn-danger col-sm-offset-1");
            }
        })
    }
});




                                                                                                    