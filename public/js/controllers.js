/**
 * Created by mustafa on 13/10/16.
 */
angular.module('movieApp.controllers',[])
    .controller('MovieListController',MovieListController)
    .controller('MovieViewController',MovieViewController)
    .controller('MovieCreateController',MovieCreateController)
    .controller('MovieEditController',MovieEditController)

MovieListController.$inject = ['$scope','MovieService','$location','$timeout'];

function MovieListController($scope,MovieService,$location,$timeout){
    // $scope.movies = [
    //     {"_id":28278,"title":"Titulo","releaseYear":"2018","director":"Juan","genre":"Terror","__v":0},
    //     {"__v":0,"_id":28275,"director":"Jamesdd","genre":"Science Fic","releaseYear":"2010","title":"Avatar"}
    // ]
    $scope.movies = MovieService.query();
    $scope.deleteMovie = function(movie){
        /*** DELETE MOVIE ***/
        movie.$delete(function(){
            $timeout($location.url('/'),2000);

        });

        /*** TEST CODE ***/

    }
    //console.log($scope.movies);
}

MovieViewController.$inject = ['$scope','$routeParams','MovieService'];

function MovieViewController($scope,$routeParams,MovieService){
    $scope.movie = MovieService.get({ id : $routeParams.id});
}

MovieCreateController.$inject = ['$scope','MovieService','$location'];

function MovieCreateController($scope,MovieService,$location){
    $scope.movie = new MovieService();
    //console.log($scope.movie);
    $scope.addMovie = function(){
        //console.log($scope.movie);
        $scope.movie.$save(function(){
            $location.url('/');
        })
    }
}

MovieEditController.$inject = ['$scope','MovieService','$routeParams','$location'];

function MovieEditController($scope,MovieService,$routeParams,$location){
    $scope.movie = MovieService.get({ id : $routeParams.id});

    $scope.updateMovie = function(){
        $scope.movie.$update(function(){
            //$scope.respondUpdated = true;
            $location.url('/');
        })
    }
}