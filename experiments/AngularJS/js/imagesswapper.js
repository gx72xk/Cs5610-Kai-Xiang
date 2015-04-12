
var NBAAllstar = [
{ "decription": "Paul and Marc,first two-brothers played in the asg", "imageurl": "http://a.espncdn.com/photo/2015/0215/nba_g_gasols_600x400.jpg" },
{ "decription": "Julius Erving, Oscar Robinson and Bill Russell, from left, talk during the NBA-AllStargame", "imageurl": "https://ionenewpittsburghcourier.files.wordpress.com/2015/02/nba-all-star-saturday_broa.jpg" },
{ "decription": "Klay Thompson playing with kid in NBA CARE", "imageurl": "http://40.media.tumblr.com/a3d014e2551c1ff1bd80fce90667a384/tumblr_njrsx3HwO41ruj0bpo1_1280.jpg" },
{ "decription": "Former President Bill Clinton, right, sits with former NBA basketball player Dikembe Mutombo ", "imageurl": "https://usatftw.files.wordpress.com/2015/02/usp_nba__all_star_game_70849535.jpg?w=1000&h=667" },
{ "decription": "Mvp,Russell Westbrook", "imageurl": "http://img.bleacherreport.net/img/images/photos/003/279/697/05d8cee6630389d922e4c23b20531efb_crop_north.jpg?w=630&h=420&q=75" }
]

var app = angular.module("ImagesSwapper", []);



app.controller("ImagesSwapperController",
    function ($scope) {
        console.log("hello");
        $scope.player = NBAAllstar
        $scope.main = NBAAllstar[0];
        $scope.swapper = function (next) {
            $scope.main = next;
        }
        console.log(NBAAllstar[0].imageurl);
});


 