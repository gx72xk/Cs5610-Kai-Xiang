var app = angular.module("ProjectApp", []);

app.controller("ProjectController", function ($scope, $http, ApiService) {
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
    //    console.log(response);
    })
     
    ApiService.searchBoston(function (response) {
        $scope.boston = {
            currentcondition: response.data.current_condition[0],
            tomorrow: response.data.weather[1],
            atomorrow: response.data.weather[2],
            aatomorrow: response.data.weather[3],
            cityname: response.data.request[0].query,

        }
      //  console.log(response);
    });

        $scope.searchCity = function () {
       
                ApiService.searchCity($scope.CityName, function (response) {
                    $scope.city = {
                        currentcondition: response.data.current_condition[0],
                        a: response.data.weather[1],
                        b: response.data.weather[2],
                        c: response.data.weather[3],
                        d: response.data.weather[4],
                        e: response.data.weather[5],
                        f: response.data.weather[6],
                        cityname: response.data.request[0].query,
                    }
                //    console.log(response);
                });

        }
    ApiService.searchBoston(function (response) {
        
            $scope.city = {
                currentcondition: response.data.current_condition[0],
                a: response.data.weather[1],
                b: response.data.weather[2],
                c: response.data.weather[3],
                d: response.data.weather[4],
                e: response.data.weather[5],
                f: response.data.weather[6],
                cityname: response.data.request[0].query,

            }
           // console.log(response);
        
    });

    ApiService.searchCityImage("boston",function(response){

        $scope.slide = {
            first:response.responseData.results[0].url,
            second:response.responseData.results[1].url,
            third: response.responseData.results[2].url,
            fouth: response.responseData.results[3].url,
        }
        console.log($scope.slide);
    

    })
    $scope.searchCityImage = function () {

        ApiService.searchCityImage($scope.CityName, function (response) {
            $scope.slide = {
                first: response.responseData.results[0].url,
                second: response.responseData.results[1].url,
                third: response.responseData.results[2].url,
                fouth: response.responseData.results[3].url,
            }
            console.log($scope.slide);

        });
        } 
 

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

