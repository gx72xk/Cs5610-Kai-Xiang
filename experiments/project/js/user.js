var app = angular.module("WeatherApp",[]);
app.controller("UserController", function ($scope, $http, $location, $rootScope, $q, $timeout) {
    $rootScope.currentUser = JSON.parse(localStorage.getItem('currentUser'));
   
    $scope.register = function (user) {
        //console.log(user);

        if (user.password != user.password2 || !user.password || !user.password2) {
            $rootScope.message = "Your passwords don't match";
            alert("password don't match!")
            
        }
        else if (!user.pic) {
            alert("Please fill in ImgUrl!")
        }
        else {
            $http.post("/register", user)
            .success(function (response) {
                //console.log(response);
              
                if (response != null) {
                    $rootScope.currentUser = response;
                    
                    //console.log($rootScope.currentUser);
                  window.location.href="login.html"
                }
            });
        }
    }

    $scope.login = function (user) {
        
        $http.post("/login", user)
        .success(function (response) {
            console.log(response)
           

                //  console.log(response);
                $rootScope.currentUser = JSON.parse(localStorage.getItem('currentUser'));
                $scope.u.username = null;
                $scope.u.password = null;
                console.log($rootScope.currentUser.username);
               window.location.href = "blog.html"
            
           // console.log($rootScope.currentUser.username);


        })
    }

  

    $scope.checkLoggedin = function () {
        var deferred = $q.defer();

        $http.get('/loggedin').success(function (user) {
            $rootScope.errorMessage = null;
            // User is Authenticated
            if (user !== '0') {
             //   $rootScope.currentUser = user;
                deferred.resolve();
                window.location.href = "blog.html"
                //$location.path('/blog');
            }
                // User is Not Authenticated
            else {
                $rootScope.errorMessage = 'You need to log in.';
                deferred.reject();
                alert("You need to Login first!")
                // $location.url('/signin');
                window.location.href = "login.html"
            }
            console.log(user)
        });

        return deferred.promise;
    };
  


    $scope.logout = function () {
        $http.post("/logout")
        .success(function () {
            $rootScope.currentUser = null;
            localStorage.removeItem("currentUser")
            window.location.href="login.html";
        });
    };
 //   console.log($rootScope.currentUser)





});

