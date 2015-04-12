
var app = angular.module("HomeApp");

app.controller("NavController", function ($scope, UserService) {
    console.log("hello");
    $scope.currentUser = null;
    $scope.logout = function () {
        $scope.currentUser = null;
        UserService.logout();
        $scope.username = null;
        $scope.password = null;
        angular.element(document.querySelector("#backhome")).attr("href", "ComingHome.html  ");
    }
    $scope.login = function () {
        var username = $scope.username;
        var password = $scope.password;
        $scope.currentUser = UserService.login(username, password);
        angular.element(document.querySelector("#backhome")).attr("href", "#/home");
        console.log($scope.currentUser)

    }

});

app.controller("HomeController", function ($scope, UserService) {
    $scope.players = UserService.players
    console.log($scope.players)
    $scope.currentUser = UserService.getcurrentUser;
    $scope.playVideo = function (currentPlayer) {
        $scope.currentPlayer = currentPlayer;
        
       
    }
});

app.config(function ($sceProvider) {

    $sceProvider.enabled(false);
});  