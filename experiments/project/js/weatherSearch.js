var app = angular.module("WeatherApp");

app.controller("WeatherController", function ($scope, $http, ApiService,$rootScope) {
    $rootScope.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    $scope.searchCity = function () {

        ApiService.searchCity($scope.CityName, function (response) {
            $scope.city = {
                currentcondition: response.data.current_condition[0],
                currentdate: response.data.weather[0].date,
                
                a: response.data.weather[1],
                b: response.data.weather[2],
                c: response.data.weather[3],
                d: response.data.weather[4],
                e: response.data.weather[5],
                f: response.data.weather[6],
                cityname: response.data.request[0].query,
                time: response.data.time_zone[0].localtime,
                sunrise: response.data.weather[0].astronomy[0].sunrise,
                sunset: response.data.weather[0].astronomy[0].sunset,
                tomorrowSunrise: response.data.weather[1].astronomy[0].sunrise,
            }
            var weatherValue = $scope.city.currentcondition.weatherDesc[0].value
            var SunsetTime = new Date(Date.parse("" + $scope.city.currentdate + " " + $scope.city.sunset + "")).getTime();
            var SunriseTime = new Date(Date.parse("" + $scope.city.currentdate + " " + $scope.city.sunrise + "")).getTime();
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
            sunrise: response.data.weather[0].astronomy[0].sunrise,
            sunset: response.data.weather[0].astronomy[0].sunset,
            currentdate: response.data.weather[0].date,
            
            a: response.data.weather[1],
            b: response.data.weather[2],
            c: response.data.weather[3],
            d: response.data.weather[4],
            e: response.data.weather[5],
            f: response.data.weather[6],
            cityname: response.data.request[0].query,
            time: response.data.time_zone[0].localtime,
            tomorrowSunrise: response.data.weather[1].astronomy[0].sunrise,

        }
        var weatherValue = $scope.city.currentcondition.weatherDesc[0].value
        var SunsetTime = new Date(Date.parse("" + $scope.city.currentdate + " " + $scope.city.sunset + "")).getTime();
        var SunriseTime = new Date(Date.parse("" + $scope.city.currentdate + " " + $scope.city.sunrise + "")).getTime();
        var CurrentTime = new Date($scope.city.time).getTime();
        ApiService.weathericon(weatherValue, CurrentTime, SunsetTime, SunriseTime)
      //  console.log(SunsetTime);
      //  console.log(SunriseTime);
      //  console.log(response)
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

    $scope.current = true;
   

    $scope.history = function (cityname) {
       
        if (cityname==undefined) {
            
            ApiService.historyChart("boston")
            console.log(cityname)
        }
        else {
            ApiService.historyChart(cityname);
            console.log(cityname)
           
        }
       $scope.current = false;
     
       
    }
    $scope.day = function () {
        if ($scope.CityName) {
            ApiService.dayChart($scope.CityName)
        }
        $scope.current = true;
    //    console.log($scope.current)
    }


       ApiService.dayChart("boston");



       $scope.addfavoriteCity = function (CityName) {
           id = $rootScope.currentUser._id
           if(CityName==undefined){
               var city={
                   cityname:"Boston"
               }
               $http.post("/api/user/" +id + "/favoriteCity", city)
               .success(function (response) {
                   if (response == "exist") {
                       alert("Already Added!")

                   }
                   else {
                       console.log(response)
                   }
                   
               })

           }
           else {
               var city = {
                   cityname: CityName
               }
               $http.post("/api/user/" + id + "/favoriteCity", city)
               .success(function (response) {
                   if (response == "exist") {
                       alert("Already Added!")

                   }
                   else {
                       console.log(response)
                   }

               })
           }
        
    }

  //  console.log($rootScope.currentUser);



    })


