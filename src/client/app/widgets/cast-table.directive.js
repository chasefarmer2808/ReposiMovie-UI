(function() {
  angular
    .module('app.widgets')
    .directive('castTable', castTable);

  /* @ngInject */
  function castTable() {
    var directive = {
      restrict: 'E',
      scope: {
        cast: '=',
      },
      controller: CastTableController,
      controllerAs: 'vm',
      bindToController: true,
      templateUrl: 'app/widgets/cast-table.html'
    }

    return directive;
  }

  CastTableController.$inject = ['$scope', '$location', 'castTableColumns'];

  function CastTableController ($scope, $location, castTableColumns) {
    var vm = this;
    vm.castTableColumns = castTableColumns;
    vm.sortType;
    vm.sortReverse = false;
    vm.searchCast;

    vm.goToCastDetail = function(castId) {
      $location.path('/person/' + castId);
    }
  }
})();
