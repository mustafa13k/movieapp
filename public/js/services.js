/**
 * Created by mustafa on 13/10/16.
 */
angular.module('movieApp.services',[])
    .factory('MovieService',MovieService);

MovieService.$inject = ['$resource'];

function MovieService($resource){
    return $resource('http://movieapp-sitepointdemos.rhcloud.com/api/movies/:id',{ id:'@_id'},{
        update : {
            method : "PUT"
        }
    });
}
