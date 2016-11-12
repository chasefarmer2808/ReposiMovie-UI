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

  MovieTableController.$inject = ['$scope', 'movieTableColumns'];

  function MovieTableController ($scope, movieTableColumns) {
    var vm = this;
    vm.movieTableColumns = movieTableColumns;
    vm.sortType = vm.movieTableColumns[0];
    vm.sortReverse = false;
    vm.searchMovies;
  }
})();
