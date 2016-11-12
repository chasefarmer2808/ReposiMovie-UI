(function() {
  'use strict';

  angular
    .module('app.movie')
    .controller('MovieController', MovieController);

  MovieController.$inject = ['$q', 'logger', 'Oracle', '$stateParams'];
  /*@ngInject*/
  function MovieController($q, logger, Oracle, $stateParams) {
    var vm = this;
    vm.movieId = $stateParams.movieId;
    vm.movie;

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
      });
    }
  }
})();
