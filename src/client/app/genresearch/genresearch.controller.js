(function() {
  'use strict';

  angular
    .module('app.genresearch')
    .controller('GenresearchController', GenresearchController);

  GenresearchController.$inject = ['$q', 'logger', 'Oracle', 'movieTableColumns'];
  /*@ngInject*/
  function GenresearchController($q, logger, Oracle, movieTableColumns) {
    var vm = this;
    vm.genres;
    vm.limit = 25;
    vm.movies;
    vm.selectedGenres = {};
    vm.movieTableColumns = movieTableColumns;

    activate();

    function activate() {
      var promises = [getAllGenres()];
      return $q.all(promises).then(function() {
        logger.info('Activated Genre View');
      });
    }

    function getAllGenres() {
      return Oracle.getAllGenres().then(function(data) {
        vm.genres = data.data;

        vm.genres.forEach(function(genre) {
          vm.selectedGenres[genre] = false;
        });
      });
    }

    vm.toggleGenre = function(genre) {
      if (vm.selectedGenres[genre]) {
        vm.selectedGenres[genre] = false;
      } else {
        vm.selectedGenres[genre] = true;
      }
    }

    vm.queryMovies = function() {
      var genres = [];

      for (var genre in vm.selectedGenres) {
        if (vm.selectedGenres[genre]) {
          genres.push(genre);
        }
      }

      return Oracle.getMoviesByGenre(genres, vm.limit).then(function(data) {
        vm.movies = data.data;
      })
    }
  }
})();
