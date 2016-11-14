(function() {
  angular
    .module('app.widgets')
    .directive('personTable', personTable);

  /* @ngInject */
  function personTable() {
    var directive = {
      restrict: 'E',
      scope: {
        people: '=',
        columns: '=',
        search: '='
      },
      controller: PersonTableController,
      controllerAs: 'vm',
      bindToController: true,
      templateUrl: 'app/widgets/person-table.html'
    }

    return directive;
  }

  PersonTableController.$inject = ['$scope', '$location'];

  function PersonTableController ($scope, $location) {
    var vm = this;
    vm.sortType;
    vm.sortReverse = false;
    vm.searchPeople;

    vm.goToPersonDetail = function(personId) {
      $location.path('/person/' + personId);
    }
  }
})();
