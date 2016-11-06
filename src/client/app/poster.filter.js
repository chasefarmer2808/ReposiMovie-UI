angular.module('app').filter('poster', function() {
  return function(path) {
    return "http://image.tmdb.org/t/p/original" + path;
  }
});