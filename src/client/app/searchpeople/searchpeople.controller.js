(function() {
  'use strict';

  angular
    .module('app.searchpeople')
    .controller('SearchPeopleController', SearchPeopleController);

  SearchPeopleController.$inject = ['$q', 'logger', 'Oracle', 'nameTableColumns'];
  /*@ngInject*/
  function SearchPeopleController($q, logger, Oracle, nameTableColumns) {
    var vm = this;
    vm.search;
    vm.limit = 25;
    vm.name;
    vm.nameTableColumns = nameTableColumns;

    vm.queryNames = function() {
      return Oracle.getPeopleByName(vm.search, vm.limit).then(function(data) {
        vm.name = data.data;
      })
    }
  }
})();
