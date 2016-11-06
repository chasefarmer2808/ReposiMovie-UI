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
    console.log(vm.movieId);
  }
})();
