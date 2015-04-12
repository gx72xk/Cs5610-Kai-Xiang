
var app = angular.module("HomeApp");


app.factory("UserService", function ($location) {
    var currentUser = null;
    var users = [
        { username: "kevin", password: "garnett" },
    { username: "paul", password: "pierce" }

    ];

    var players = [
        { name: "Paul Pierce", title:"Paul Pierce first came back to Boston ",description: '"A lot of emotion went into it. Going through what we went through last year, I had a lot of thoughts like, ‘Shoot, I could have just stayed in Boston"', imgUrl: "http://1.bp.blogspot.com/-dPe85WyxRSw/TljvnvziODI/AAAAAAAACMU/26SclJHmFEw/s1600/paul-pierce-celtics.jpg", videoUrl: "https://www.youtube.com/embed/Pz6FgbumXv0" },
        { name: "Kevin Garnett", title: "Kevin Garnett returns to Minnesota", description: '"It is perferct.If you have a story, this is a fairy tale. This is a perfect ending to it. This is how you want to do it"', imgUrl: "http://www.basketballdirect.com/Images/News/100/10.Jpg", videoUrl: "https://www.youtube.com/embed/lRhZE_W_Zks" },
        { name: "Lebron James",title:"Lebron decided to get back to Cleveland", description: '"I always believed that I d return to Cleveland and finish my career there"', imgUrl: "http://notiultimas.com/digital/images/stories/deporte/baloncesto/NBA/LEBRONJAM/lebron-james-2.jpg", videoUrl: "https://www.youtube.com/embed/z4Ta_K1n6qs" },
    ];

 

    var logout = function () {
        currentUser = null;
    };
    var login = function (username, password) {
        for (var u in users) {
            if (users[u].username == username&&users[u].password==password) {
                currentUser = users[u];
                $location.path('/home');
                return users[u];
                
                
            }
            else {
                alert("username and password don't match!")
            }
        }
        return null;
    };

    var getCurrentUser = function () {
        return currentUser;
    }

    return {
        players: players,
        login: login,
        logout: logout,
        getCurrentUser: getCurrentUser,
        
    };

})

