(function() {
  'use strict';

  /**
  *@desc a movie table directive that displays query results in a table with sortable rows and filter.
  *@example <movie-table movies=vm.movies></movie-table>
  */


  angular
    .module('app.widgets')
    .directive('movieTable2', movieTable2);

  /* @ngInject */
  function movieTable2() {
    var directive = {
      restrict: 'E',
      scope: {
        movies: '='
      },
      controller: MovieTableController2,
      controllerAs: 'vm',
      bindToController: true,
      templateUrl: 'app/widgets/movie-table2.html'
    }

    return directive;
  }

  MovieTableController2.$inject = ['$scope', '$location', 'movieTableColumns2'];

  function MovieTableController2 ($scope, $location, movieTableColumns2) {
    var vm = this;
    vm.movieTableColumns2 = movieTableColumns2;
    vm.sortType = vm.movieTableColumns2[0];
    vm.sortReverse = false;
    vm.searchMovies;

    vm.goToMovieDetail = function(movieId) {
      $location.path('/movie/' + movieId);
    }
  }
})();
