var app = angular.module("WeatherApp");
app.controller("BlogController", function ($scope, $rootScope, $http) {

    $http.get("/api/posts/")
.success(function (response) {
    $scope.posts = response;
});
    $http.get("/api/user/"+$rootScope.currentUser._id)
.success(function (response) {
    $scope.user = response;
     //console.log(response)
});
    
    // var myDate = dateFromISO8601("2015-04-18T03:17:34.000Z");
    //console.log(myDate);
    
    $scope.visible = false;


    $scope.addBlog = function (newBlog) {
        newBlog.username = $rootScope.currentUser.username;
        newBlog.userPic = $rootScope.currentUser.pic;
        console.log(newBlog)
        $http.post("/api/posts/", newBlog)
        .success(function (response) {
            console.log(response)
            window.location.href="blog.html"
        });


    };

    $scope.clickToPost = function () {
        if ($scope.visible == false) {
            $scope.visible = true;
        }
        else {
            $scope.visible = false;;
        }

    };

    //$scope.$watch('posts', function () {

    //});


    $scope.postComment = function (id, newComment) {
        newComment.userPic = $rootScope.currentUser.pic;
        newComment.username = $rootScope.currentUser.username;
        $http.post("/api/posts/" + id + "/comment", newComment)
        .success(function (response) {
            $scope.posts = response;
            console.log(response);
        })

    }


    $scope.addToFollow = function (username, userPic) {
        var currentUser={
            username: $rootScope.currentUser.username,
            userPic: $rootScope.currentUser.pic

        }
        var friend = {
            username:username,
            userPic: userPic,
            otherUser:currentUser
        }
        console.log(friend);
        $http.post("/api/user/"+$rootScope.currentUser._id+"/followed", friend)
        .success(function (response) {
            if (response == "exist") {
                alert("You have followed this user!")

            }
            else {
                $scope.user = response;
                console.log(response)
            }
         
        });


    };


    $scope.updateUser = function (loginUser) {
        
        var obj ={
            password: loginUser.password,
            email: loginUser.email,
            pic: loginUser.pic
        }
        var updateUser = {
            username: $rootScope.currentUser.username,
            update:obj

        }
        console.log(updateUser);
        $http.put("/api/user/" + $rootScope.currentUser._id, updateUser).
        success(function (response) {
            $scope.user = response;
        })

    }


    $scope.deletePost = function (id) {
        $http.delete("/api/posts/" + id)
        .success(function (response) {
            $scope.posts = response;
            console.log(response)


        })
    }

    $scope.deleteComment = function (postId, commentIndex) {
        $http.delete("/api/posts/" + postId + "/comment/" + commentIndex)
            .success(function (response) {
                $scope.posts = response;
                console.log(response)
            })
        console.log(commentIndex)
    }
   

});





app.directive('collapseToggler', function(){
    return {
        restrict: 'A',
        link: function(scope, elem, attrs) {
            elem.on('click', function() {
                $(this).siblings('.collapse').toggleClass('in');
            });
        }
};
})