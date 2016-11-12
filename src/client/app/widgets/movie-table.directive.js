(function() {
  'use strict';

  angular
    .module('app.widgets')
    .directive('movieTable', movieTable);

  /* @ngInject */
  function movieTable() {
    var directive = {
      restrict: 'E',
      scope: {
        movies: '='
      },
      controller: MovieTableController,
      controllerAs: 'vm',
      bindToController: true,
      templateUrl: 'app/widgets/movie-table.html'
    }

    return directive;
  }

  MovieTableController.$inject = ['$scope'];

  function MovieTableController ($scope) {
    var vm = this;
    console.log(vm.movies);
  }
})();
