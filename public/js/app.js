/**
 * Created by mustafa on 13/10/16.
 */
angular.module('movieApp',['ngRoute','ngResource','movieApp.controllers','movieApp.services','movieApp.directives'])
    .config(function($routeProvider){
        $routeProvider
            .when('/movies',{
                templateUrl: 'partials/movies.html',
                controller: 'MovieListController'

            }).
            when('/movie/:id/view',{
                templateUrl : 'partials/movie-view.html',
                controller:'MovieViewController'
            }).
            when('/movie/new',{
                templateUrl : 'partials/movie-add.html',
                controller:'MovieCreateController'
            }).
            when('/movie/:id/edit',{
                templateUrl : 'partials/movie-edit.html',
                controller:'MovieEditController'
            }).
            otherwise({
               redirectTo:'/movies'
            });
    });