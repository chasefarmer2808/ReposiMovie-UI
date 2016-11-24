(function() {
  'use strict';

  angular
    .module('app.mainsearch')
    .controller('MainsearchController', MainsearchController);

  MainsearchController.$inject = ['$q', 'logger', 'Oracle', 'movieTableColumns'];
  /*@ngInject*/
  function MainsearchController($q, logger, Oracle, movieTableColumns) {
    var vm = this;
    vm.search;
    vm.limit = 25;
    vm.movies;
    vm.movieTableColumns = movieTableColumns;

    vm.queryMovies = function() {
      return Oracle.getMoviesByTitle(vm.search, vm.limit).then(function(data) {
        vm.movies = data.data;
      })
    }
  }
})();
