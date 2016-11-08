(function() {
  'use strict';

  angular
    .module('app.genresearch')
    .controller('GenresearchController', GenresearchController);

  GenresearchController.$inject = ['$q', 'logger', 'Oracle'];
  /*@ngInject*/
  function GenresearchController($q, logger, Oracle) {
    var vm = this;
    vm.genres;

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
      });
    }
  }
})();
