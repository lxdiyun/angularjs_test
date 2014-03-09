var queryApp = angular.module('queryApp', ['queryModel']);

queryApp.controller('QueryCtrl', ['$scope', 'Book', function ($scope, Book) {
  $scope.doQuery = function () {
    Book.get({query:$scope.query}, function(result) {
      $scope.books = result.books;
    });
  };
}
]);

