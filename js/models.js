var queryModel = angular.module('queryModel', ['ngResource']);

queryModel.factory('Book', ['$resource', '$window',
                   function($resource, $window){
                     var c = $window.angular.callbacks.counter.toString(36);
                     var callbackId = '_' + c;

                     return $resource('http://api.douban.com/v2/book/search?q=:query',
                                      {count: 8, callback: 'JSON_CALLBACK'},
                                      {get: {method: 'JSONP'}}
                                      );
//                     return $resource('https://www.googleapis.com/books/v1/volumes?q=:query',
//                                      {maxResults: '8', callback: 'JSON_CALLBACK'},
//                                      {get: {method: 'JSONP'}}
//                                      );
                   }]);
