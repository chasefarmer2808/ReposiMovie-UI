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

        vm.movie.crew.forEach(function(crew) {
          if (crew.job == 'Director') {
            vm.featuredCrew.push(crew);
          }
        });
      });
    }
  }
})();
