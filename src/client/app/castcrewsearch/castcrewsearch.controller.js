(function() {
  'use strict';

  angular
    .module('app.castcrewsearch')
    .controller('CastCrewsearchController', CastCrewsearchController);

  CastCrewsearchController.$inject = ['$q', 'logger', 'Oracle'];
  /*@ngInject*/
  function CastCrewsearchController($q, logger, Oracle) {
    var vm = this;

    vm.names = [""];

    vm.findMovies = function() {
      Oracle.getMoviesByCastCrew(vm.names)
        .then(function(response) {
          vm.movies = response.data
          console.log(response.data);
        }, function(error) {
          console.log(error);
      });
    };
  }
})();
