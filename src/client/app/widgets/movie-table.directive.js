(function() {
  'use strict';

  /**
  *@desc a movie table directive that displays query results in a table with sortable rows and filter.
  *@example <movie-table movies=vm.movies></movie-table>
  */


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
