(function() {
  'use strict';

  angular
    .module('app.movie')
    .controller('MovieController', MovieController);

  MovieController.$inject = ['$q', 'logger', 'Oracle', '$stateParams', 'castTableColumns', 'crewTableColumns'];
  /*@ngInject*/
  function MovieController($q, logger, Oracle, $stateParams, castTableColumns, crewTableColumns) {
    var vm = this;
    vm.movieId = $stateParams.movieId;
    vm.movie;
    vm.similarMovies = [];
    vm.featuredCrew = [];
    vm.castColumns = castTableColumns;
    vm.crewColumns = crewTableColumns;

    activate();

    function activate() {
      var promises = [getMovie()];
      return $q.all(promises).then(function() {
        logger.info('Activated Movie Detail View')
      });
    }

    function getMovie() {
      return Oracle.getMovieById(vm.movieId).then(function(data) {
        vm.movie = data.data;
        getSimilarMovie();
        vm.movie.crew.forEach(function(crew) {
          if (crew.job == 'Director') {
            vm.featuredCrew.push(crew);
          }
        });
      });
    }

    function getSimilarMovie() {
      var genres = [];

      vm.movie.genres.forEach(function(genre) {
        genres.push(genre.name);
      });

      return Oracle.getMoviesByGenre(genres).then(function(data) {
        var movies = data.data;

        movies.forEach(function(movie, index) {
          if (movie.movie_id === vm.movie.movie_id) {
            movies.splice(index, 1);
          }
        });

        if (movies.length <= 6) {
          vm.similarMovies = movies;
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
            vm.similarMovies.push(movies[num]);
          });
          console.log(vm.similarMovies);
        }
      });
    }
  }
})();
