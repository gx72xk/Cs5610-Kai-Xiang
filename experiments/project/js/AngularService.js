var app = angular.module("WeatherApp");

app.factory("ApiService", function ($location, $http) {
    var currentUser = null;
    var searchBeijing = function (callback) {
        $http.get("http://api.worldweatheronline.com/premium/v1/weather.ashx?num_of_days=7&q=beijing&tp=24&format=json&key=1d4ed81494e88cf95af6118caa7ed")
        .success(callback)
    };
    var searchLondon = function (callback) {
        $http.get("http://api.worldweatheronline.com/premium/v1/weather.ashx?num_of_days=7&q=london&tp=24&format=json&key=1d4ed81494e88cf95af6118caa7ed")
        .success(callback)
    };
    var searchBoston = function (callback) {
        $http.get("http://api.worldweatheronline.com/premium/v1/weather.ashx?num_of_days=7&q=boston&tp=24&showlocaltime=yes&format=json&key=1d4ed81494e88cf95af6118caa7ed")
        .success(callback)
    };
    var searchCity = function (city, callback) {

        $http.get("http://api.worldweatheronline.com/premium/v1/weather.ashx?num_of_days=7&q=" + city + "&tp=24&showlocaltime=yes&format=json&key=1d4ed81494e88cf95af6118caa7ed")
            .success(callback)

    }
    var searchCityImage = function(city,callback){
        $http({
        method: 'jsonp', 
        url: "https://ajax.googleapis.com/ajax/services/search/images?v=1.0&q=" + city + "&imgsz=large&imgtype=photo&as_filetype=jpg&callback=JSON_CALLBACK",
        
        })
        .success(callback)
        }

    //var login = function (user) {
    //    $http.post("/login", user).success(function (response) {
    //        currentUser = response;
    //        return currentUser;
    //    })
    //}


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
      
        if (weather.indexOf("Clear") !== -1 || weather.indexOf("Sunny") !== -1) {
            if (time<sunset&&time>sunrise) {
                skycons.set("icon1", "clear-day");
            }
            else {
                skycons.set("icon1", "clear-night");
            }

        }
        else if (weather.indexOf("Partly Cloudy") !== -1) {
            if (time < sunset && time > sunrise) {
                skycons.set("icon1", "partly-cloudy-day");
            }
            else {
                skycons.set("icon1", "partly-cloudy-night");
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
        else {
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


  
        var historyChart = function (city) {

            $http.get("http://api.worldweatheronline.com/premium/v1/weather.ashx?num_of_days=7&q=" + city + "&tp=3&showlocaltime=yes&format=json&key=1d4ed81494e88cf95af6118caa7ed")
                .success(function(response){
                    console.log(response)
                    // console.log(response.data.ClimateAverages[0].month[0].absMaxTemp)
                    var citydata = {
                        Janhigh: response.data.ClimateAverages[0].month[0].absMaxTemp,
                        Janlow: response.data.ClimateAverages[0].month[0].avgMinTemp,
                        Febhigh: response.data.ClimateAverages[0].month[1].absMaxTemp,
                        Feblow: response.data.ClimateAverages[0].month[1].avgMinTemp,
                        Marhigh: response.data.ClimateAverages[0].month[2].absMaxTemp,
                        Marlow: response.data.ClimateAverages[0].month[2].avgMinTemp,
                        Aprhigh: response.data.ClimateAverages[0].month[3].absMaxTemp,
                        Aprlow: response.data.ClimateAverages[0].month[3].avgMinTemp,
                        Mayhigh: response.data.ClimateAverages[0].month[4].absMaxTemp,
                        Maylow: response.data.ClimateAverages[0].month[4].avgMinTemp,
                        Junhigh: response.data.ClimateAverages[0].month[5].absMaxTemp,
                        Junlow: response.data.ClimateAverages[0].month[5].avgMinTemp,
                        Julhigh: response.data.ClimateAverages[0].month[6].absMaxTemp,
                        Jullow: response.data.ClimateAverages[0].month[6].avgMinTemp,
                        Aughigh: response.data.ClimateAverages[0].month[7].absMaxTemp,
                        Auglow: response.data.ClimateAverages[0].month[7].avgMinTemp,
                        Sephigh: response.data.ClimateAverages[0].month[8].absMaxTemp,
                        Seplow: response.data.ClimateAverages[0].month[8].avgMinTemp,
                        Octhigh: response.data.ClimateAverages[0].month[9].absMaxTemp,
                        Octlow: response.data.ClimateAverages[0].month[9].avgMinTemp,
                        Novhigh: response.data.ClimateAverages[0].month[10].absMaxTemp,
                        Novlow: response.data.ClimateAverages[0].month[10].avgMinTemp,
                        Dechigh: response.data.ClimateAverages[0].month[11].absMaxTemp,
                        Declow: response.data.ClimateAverages[0].month[11].avgMinTemp,
                    }
                    
                   
                
                    var data = {
                        labels: ["January", "February", "March", "April", "May", "June", "July","August","September","October","November","December"],
                        datasets: [
                            {
                                label: "Max",
                                fillColor: "rgba(151,187,205,0.5)",
                                strokeColor: "#FF512F",
                                pointColor: "rgba(220,220,220,1)",
                                pointStrokeColor: "#fff",
                                data: [citydata.Janhigh, citydata.Febhigh, citydata.Marhigh,citydata.Aprhigh,citydata.Mayhigh,citydata.Junhigh,citydata.Julhigh,citydata.Aughigh,citydata.Sephigh,citydata.Octhigh,citydata.Novhigh,citydata.Dechigh]
                            },
                            {
                                label: "Min",
                                fillColor: "rgba(220,220,220,0.5)",
                                strokeColor: "#3D7EAA",
                                pointColor: "rgba(151,187,205,1)",
                                pointStrokeColor: "#fff",
                                data: [citydata.Janlow,citydata.Feblow,citydata.Marlow,citydata.Aprlow,citydata.Maylow,citydata.Junlow,citydata.Jullow,citydata.Auglow,citydata.Seplow,citydata.Octlow,citydata.Novlow,citydata.Declow]
                            }
                        ]
                    }

                    console.log(citydata);


                    
                   
                   
                    var ctx = $("#historical").get(0).getContext("2d");
                   
                    var historicalChart = new Chart(ctx).Line(data, {
                        scaleFontSize: 15,
                        pointLabelFontSize: 15,
                        pointLabelFontColor: "#FF5511",
                        pointLabelFontStyle: "bolder",
                        scaleLineWidth: 2,
                        scaleLineColor: "rgba(0,0,0,.1)",
                        datasetFill: false,
                        scaleShowGridLines: false,

                    });
                    
                
                })

                }
            
    // daychart
        var dayChart = function (city) {

            $http.get("http://api.worldweatheronline.com/premium/v1/weather.ashx?num_of_days=7&q=" + city + "&tp=3&showlocaltime=yes&format=json&key=1d4ed81494e88cf95af6118caa7ed")
                .success(function (response) {
             
                    var currentdata = {
                        a: response.data.weather[0].hourly[0].tempC,
                        b: response.data.weather[0].hourly[1].tempC,
                        c: response.data.weather[0].hourly[2].tempC,
                        d: response.data.weather[0].hourly[3].tempC,
                        e: response.data.weather[0].hourly[4].tempC,
                        f: response.data.weather[0].hourly[5].tempC,
                        g: response.data.weather[0].hourly[6].tempC,
                        h: response.data.weather[0].hourly[7].tempC,

                    }

                   


                    var data1 = {
                        labels: ["2am", "5am", "8am", "11am", "2pm", "5pm", "8pm", "11pm"],
                        datasets: [
                            {
                                label: "Max",
                                fillColor: "#FFC837",
                                strokeColor: "rgba(220,220,220,1)",
                                pointColor: "rgba(220,220,220,1)",
                                pointStrokeColor: "#fff",
                                data: [currentdata.a, currentdata.b, currentdata.c, currentdata.d, currentdata.e, currentdata.f, currentdata.g, currentdata.h]
                            },
                            
                        ]
                    }

                    var ctx1 = $("#currentday").get(0).getContext("2d");
                    
                    var currentday = new Chart(ctx1).Line(data1, {
                        scaleFontSize: 18,
                        pointLabelFontSize: 18,
                        pointLabelFontColor: "#FF5511",
                        pointLabelFontStyle: "bolder",
                        scaleLineWidth: 2,
                        scaleLineColor: "rgba(0,0,0,.1)",
                        datasetFill: true,
                        scaleShowGridLines: false,
                    });

                })


        }
        
        var loginForm = function () {
            $(document).ready(function () {
       $(".username").focus(function () {
           $(".user-icon").css("left", "-48px");
       });
       $(".username").blur(function () {
           $(".user-icon").css("left", "0px");
       });

       $(".password").focus(function () {
           $(".pass-icon").css("left", "-48px");
       });
       $(".password").blur(function () {
           $(".pass-icon").css("left", "0px");
       });
   });

    
   }
    




    return {
        searchBeijing: searchBeijing,
        searchLondon: searchLondon,
        searchBoston: searchBoston,
        searchCity: searchCity,
        searchCityImage:searchCityImage,
        getDay: getDay,
        timer: timer,
        weathericon: weathericon,
        historyChart:historyChart,
        dayChart: dayChart,
        loginForm: loginForm,
        
    }

    
});