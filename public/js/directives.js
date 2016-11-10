/**
 * Created by mustafa on 15/10/16.
 */
angular.module('movieApp.directives',[])
    .directive('loading',function(){
       return{
           restrict:'EA',
           scope: {},
           link:function (scope,element,attrs) {
               element.bind('click',function(){
                  element.text(attrs.loading + '..');
               });
           }
       }
    });
