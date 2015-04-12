var app = angular.module("ProjectApp");

app.factory("ApiService", function ($location,$http) {
    var searchBeijing = function (callback) {
        $http.get("http://api.worldweatheronline.com/premium/v1/weather.ashx?num_of_days=7&q=beijing&tp=24&format=json&key=36c06e6c39199fdbb6b6ce4057719")
        .success(callback)
    };
    var searchLondon = function (callback) {
        $http.get("http://api.worldweatheronline.com/premium/v1/weather.ashx?num_of_days=7&q=london&tp=24&format=json&key=36c06e6c39199fdbb6b6ce4057719")
        .success(callback)
    };
    var searchBoston = function (callback) {
        $http.get("http://api.worldweatheronline.com/premium/v1/weather.ashx?num_of_days=7&q=boston&tp=24&showlocaltime=yes&format=json&key=36c06e6c39199fdbb6b6ce4057719")
        .success(callback)
    };
    var searchCity = function (city, callback) {

        $http.get("http://api.worldweatheronline.com/premium/v1/weather.ashx?num_of_days=7&q=" + city + "&tp=24&showlocaltime=yes&format=json&key=36c06e6c39199fdbb6b6ce4057719")
            .success(callback)

    }
    var searchCityImage = function(city,callback){
        $http({
        method: 'jsonp', 
        url: "https://ajax.googleapis.com/ajax/services/search/images?v=1.0&q=" + city + "+view&imgsz=large&imgtype=photo&as_filetype=jpg&callback=JSON_CALLBACK",
        
        })
        .success(callback)
        }

    
    function getDay(obj) {
        var day = new Date().getDay();
        switch (day) {
            case 0:
                obj.a = "Mon";
                obj.b = "Tue";
                obj.c = "Wed";
                obj.d = "Thu";
                obj.e = "Fri";
                obj.f = "Sat";
                break;
            case 1:
                obj.a = "Tue";
                obj.b = "Wed";
                obj.c = "Thu";
                obj.d = "Fri";
                obj.e = "Sat";
                obj.f = "Sun";
                break;
            case 2:
                obj.a = "Wed";
                obj.b = "Thu";
                obj.c = "Fri";
                obj.d = "Sat";
                obj.e = "Sun";
                obj.f = "Mon";
                break;
            case 3:
                obj.a = "Thu";
                obj.b = "Fri";
                obj.c = "Sat";
                obj.d = "Sun";
                obj.e = "Mon";
                obj.f = "Tue";
                break;
            case 4:
                obj.a = "Fri";
                obj.b = "Sat";
                obj.c = "Sun";
                obj.d = "Mon";
                obj.e = "Tue";
                obj.f = "Wed";
                break;
            case 5:
                obj.a = "Sat";
                obj.b = "Sun";
                obj.c = "Mon";
                obj.d = "Tue";
                obj.e = "Wed";
                obj.f = "Thu";
                break;
            case 6:
                obj.a = "Sun";
                obj.b = "Mon";
                obj.c = "Tue";
                obj.d = "Wed";
                obj.e = "Thu";
                obj.f = "Fri";
                break;
        }
    };

    function weathericon(weather,time,sunset,sunrise) {
        var skycons = new Skycons({ "color": "white" });
      //  var date = Date.parse("January 1 2015 7:00 PM")
        if (weather.indexOf("Clear") !== -1 || weather.indexOf("Sunny") !== -1) {
            if (time > sunset || time < sunrise) {
                skycons.set("icon1", "clear-night");
            }
            else {
                skycons.set("icon1", "clear-day");
            }

        }
        else if (weather.indexOf("Partly Cloudy") !== -1) {
            if (time > sunset || time < sunrise) {
                skycons.set("icon1", "partly-cloudy-night");
            }
            else {
                skycons.set("icon1", "partly-cloudy-day");
            }

        }
        else if (weather.indexOf("Rain") !== -1) {
            skycons.set("icon1", "rain");
        }
        else if (weather.indexOf("Sleet") !== -1) {
            skycons.set("icon1", "sleet");
        }
        else if (weather.indexOf("Snow") !== -1) {
            skycons.set("icon1", "snow");
        }
        else if (weather.indexOf("Wind") !== -1) {
            skycons.set("icon1", "wind");
        }
        else if (weather.indexOf("Fog") !== -1) {
            skycons.set("icon1", "fog");
        }
        skycons.play();
    }





    var timer = function () {
        var utc = new Date().getTime() + (new Date().getTimezoneOffset() * 60000);
        var mytime = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
        var london = new Date(utc + (3600000 * 1)).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
        var boston = new Date(utc + (3600000 * -4)).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
        var beijing = new Date(utc + (3600000 * 8)).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

        $("#current-time").text(mytime);
        $("#beijing-time").text(beijing);
        $("#london-time").text(london)
        $("#boston-time").text(boston)
    };







    return {
        searchBeijing: searchBeijing,
        searchLondon: searchLondon,
        searchBoston: searchBoston,
        searchCity: searchCity,
        searchCityImage:searchCityImage,
        getDay: getDay,
        timer: timer,
        weathericon: weathericon
    }

    
});