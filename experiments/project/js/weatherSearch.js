var app = angular.module("ProjectApp", []);

app.controller("ProjectController", function ($scope, $http, ApiService) {
    
    $scope.searchCity = function () {

        ApiService.searchCity($scope.CityName, function (response) {
            $scope.city = {
                currentcondition: response.data.current_condition[0],
                currentdate: response.data.weather[0].date,
                tomorrowdate: response.data.weather[1].date,
                a: response.data.weather[1],
                b: response.data.weather[2],
                c: response.data.weather[3],
                d: response.data.weather[4],
                e: response.data.weather[5],
                f: response.data.weather[6],
                cityname: response.data.request[0].query,
                time: response.data.time_zone[0].localtime,
                sunrise: response.data.weather[1].astronomy[0].sunrise,
                sunset: response.data.weather[0].astronomy[0].sunset,
            }
            var weatherValue = $scope.city.currentcondition.weatherDesc[0].value
            var SunsetTime = new Date(Date.parse("" + $scope.city.currentdate + " " + $scope.city.sunset + "")).getTime();
            var SunriseTime = new Date(Date.parse("" + $scope.city.tomorrowdate + " " + $scope.city.sunrise + "")).getTime();
            var CurrentTime = new Date($scope.city.time).getTime();
            ApiService.weathericon(weatherValue, CurrentTime, SunsetTime, SunriseTime)
            console.log(CurrentTime);
            console.log(SunsetTime);
            console.log(SunriseTime);
            console.log(response)
        });

    };

   // $scope.city = $rootScope.boston;


    ApiService.searchBoston(function (response) {

        $scope.city = {
            currentcondition: response.data.current_condition[0],
            sunrise: response.data.weather[1].astronomy[0].sunrise,
            sunset: response.data.weather[0].astronomy[0].sunset,
            currentdate: response.data.weather[0].date,
            tomorrowdate: response.data.weather[1].date,
            a: response.data.weather[1],
            b: response.data.weather[2],
            c: response.data.weather[3],
            d: response.data.weather[4],
            e: response.data.weather[5],
            f: response.data.weather[6],
            cityname: response.data.request[0].query,
            time: response.data. time_zone[0].localtime,

        }
        var weatherValue = $scope.city.currentcondition.weatherDesc[0].value
        var SunsetTime = new Date(Date.parse("" + $scope.city.currentdate + " " + $scope.city.sunset + "")).getTime();
        var SunriseTime = new Date(Date.parse("" + $scope.city.tomorrowdate + " " + $scope.city.sunrise + "")).getTime();
        var CurrentTime = new Date($scope.city.time).getTime();
        ApiService.weathericon(weatherValue, CurrentTime, SunsetTime, SunriseTime)
      //  console.log(SunsetTime);
      //  console.log(SunriseTime);
       // console.log(response)
    });

    ApiService.searchCityImage("boston", function (response) {
        $scope.slide = {
            first: response.responseData.results[0].url,
            second: response.responseData.results[1].url,
            third: response.responseData.results[2].url,
            fouth: response.responseData.results[3].url,
        }
        //   console.log($scope.slide);


    })
    $scope.searchCityImage = function () {

        ApiService.searchCityImage($scope.CityName, function (response) {
            $scope.slide = {
                first: response.responseData.results[0].url,
                second: response.responseData.results[1].url,
                third: response.responseData.results[2].url,
                fouth: response.responseData.results[3].url,
            }
            //      console.log($scope.slide);

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


});

