angular.module('app').filter('poster', function() {
  return function(path) {
    if (!path)
      return 'images/not-found.jpg';
    else if (path == "None")
      return 'images/not-found.jpg';
    else
      return "http://image.tmdb.org/t/p/original" + path;
  }
});