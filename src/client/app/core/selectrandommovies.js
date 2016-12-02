(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('selectrandommovies', selectrandommovies);

  selectrandommovies.$inject = ['exception', 'logger'];
  /*@ngInject*/
  function selectrandommovies(exception, logger) {
    var service = {
      selectRandom: selectRandom
    };

    return service;

    function selectRandom(movies, skipId) {
      var ret = [];

      if (skipId) {
        movies.forEach(function(movie, index) {
          if (movie.movie_id === skipId) {
            movies.splice(index, 1);
          }
        });
      }

      if (movies.length <= 6) {
        ret = movies;
      } else {
        var randNums = [];
        var max = movies.length;
        var min = 0;

        while (randNums.length < 6) {
          var num = Math.floor(Math.random() * (max - min)) + min;

          if (randNums.indexOf(num) == -1) {
            randNums.push(num);
          }
        }

        randNums.forEach(function(num) {
          ret.push(movies[num]);
        });
      }

      return ret;
    }
  }
})();
