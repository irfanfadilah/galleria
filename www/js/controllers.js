angular.module('starter.controllers', [])

.controller('CategoriesCtrl', function($scope){
  $scope.categories = [
    { id: 'popular', name: 'Popular' },
    { id: 'highest_rated', name: 'Top Rated' },
    { id: 'upcoming', name: 'Upcoming' },
    { id: 'editor', name: 'Editors Choice' },
    { id: 'fresh_today', name: 'Fresh Today' },
    { id: 'fresh_week', name: 'Fresh Week' }
  ];
})

.controller('GalleriesCtrl', function($scope, $http, $stateParams){
  $http.get('https://api.500px.com/v1/photos?feature=' + $stateParams.categories + '&consumer_key=4wDLZd6UVnstpIORqUP9pskt1EFkRRIBOarsvIjC')
    .success(function(data, status, headers, config) {
      $scope.result = data;
    })
    .error(function(data, status, headers, config) {
      alert('Please Check Your F*cking Internet Connection. :)');
    });
})

.controller('PhotosCtrl', function($scope, $http, $stateParams, $sce){
  $http.get('https://api.500px.com/v1/photos/' + $stateParams.id + '?consumer_key=4wDLZd6UVnstpIORqUP9pskt1EFkRRIBOarsvIjC')
    .success(function(data, status, headers, config) {
      $scope.result = data;
    })
    .error(function(data, status, headers, config) {
      alert('Please Check Your F*cking Internet Connection. :)');
    });
});
