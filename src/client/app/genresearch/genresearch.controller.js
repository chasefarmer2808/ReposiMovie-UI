(function() {
  'use strict';

  angular
    .module('app.genresearch')
    .controller('GenresearchController', GenresearchController);

  GenresearchController.$inject = ['$q', 'logger', 'Oracle'];
  /*@ngInject*/
  function GenresearchController($q, logger, Oracle) {
    var vm = this;
  }
})();
