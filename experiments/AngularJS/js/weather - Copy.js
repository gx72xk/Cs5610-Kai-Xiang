var app = angular.module("WeatherApp", []);



app.controller("WeatherController", function ($scope, $http) {
    //$http.get("http://api.worldweatheronline.com/premium/v1/weather.ashx?num_of_days=3&q=boston,USA&tp=24&format=json&key=36c06e6c39199fdbb6b6ce4057719")
    //    .success(function (response) {
    //        console.log(response);

    //        $scope.cityname = response.data.request[0].query;
    //        $scope.currentcondition = response.data.current_condition[0];
    //        $scope.today = response.data.weather[0];
    //        $scope.tomorrow = response.data.weather[1];
       

    //        console.log(response.data.current_condition[0].weatherIconUrl[0].value);
    //        })
     $scope.visible = false;
    $scope.searchCity = function () {
        var city = $scope.searchByCity;
        $http.get("http://api.worldweatheronline.com/premium/v1/weather.ashx?num_of_days=3&q=" + city + "&tp=24&format=json&key=36c06e6c39199fdbb6b6ce4057719")
        .success(function (response) {
           // var currentcondition = response.data.current_condition[0];
           // var today = response.data.weather[0];
          //  var tomorrow = response.data.weather[1];
// $scope.weather = { today: response.data.weather[0] };

            
            $scope.currentcondition = response.data.current_condition[0];
            $scope.today = response.data.weather[0]; 
            $scope.tomorrow = response.data.weather[1];
            $scope.cityname = response.data.request[0].query;
            $scope.visible = true;

        })
    }
    
});


                                                                                                    