(function() {
  /**
  *@desc custom table directive that displays data in rows.  The rows may link to detail pages.  The columns are sortable.
  *The search bar is toggolable.
  *@example <custom-table data="vm.movies" search="true" includePoster="true"></ custom-table>
  */

  angular
    .module('app.widgets')
    .directive('customTable', customTable);

  /* @ngInject */
  function customTable() {
    var directive = {
      restrict: 'E',
      scope: {
        data: '=',
        columns: '=',
        search: '=',
        poster: '='
      },
      controller: CustomTableController,
      controllerAs: 'vm',
      bindToController: true,
      templateUrl: 'app/widgets/custom-table.html'
    }

    return directive;
  }

  CustomTableController.$inject = ['$scope', '$location', '$window'];

  function CustomTableController ($scope, $location, $window) {
    var vm = this;
    vm.sortType;
    vm.sortReverse = false;
    vm.searchData;

    vm.goToDataDetail = function(data) {
      if (data.movie_id) {
        $window.open('/movie/' + data.movie_id, '_blank');
      } else if (data.person_id) {
        $window.open('/person/' + data.person_id, '_blank');
      }
    }

    vm.resetTable = function() {
      vm.sortType = '';
      vm.sortReverse = false;
      vm.searchData = '';
    }
  }
})();
