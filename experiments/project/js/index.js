var app = angular.module("WeatherApp");

app.controller("IndexController", function ($scope, $http, ApiService,$rootScope) {
    //$scope.visible = false;
    ApiService.searchBeijing(function (response) {
        
        $scope.beijing = {
            currentcondition: response.data.current_condition[0],
            tomorrow: response.data.weather[0],
            atomorrow: response.data.weather[1],
            aatomorrow: response.data.weather[2],
            cityname: response.data.request[0].query,
            
        }
     
        
    });

    ApiService.searchLondon(function(response){
        $scope.london = {
            currentcondition: response.data.current_condition[0],
            tomorrow: response.data.weather[1],
            atomorrow: response.data.weather[2],
            aatomorrow: response.data.weather[3],
            cityname: response.data.request[0].query,
        }
       console.log(response);
    })
     
    ApiService.searchBoston(function (response) {
        $scope.boston = {
            currentcondition: response.data.current_condition[0],
            tomorrow: response.data.weather[1],
            atomorrow: response.data.weather[2],
            aatomorrow: response.data.weather[3],
            cityname: response.data.request[0].query,

        }
        console.log(response);
    });



    var weekday = new Object();
    ApiService.getDay(weekday);
    $scope.a = weekday.a;
    $scope.b = weekday.b;
    $scope.c = weekday.c;
    $scope.d = weekday.d;
    $scope.e = weekday.e;
    $scope.f = weekday.f;

    setInterval(ApiService.timer);
    
    
  
});

