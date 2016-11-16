(function() {
  'use strict';

  angular
    .module('app.person')
    .controller('PersonController', PersonController);

  PersonController.$inject = ['$q', 'logger', 'Oracle', '$stateParams'];
  /*@ngInject*/
  function PersonController($q, logger, Oracle, $stateParams) {
    var vm = this;
    vm.personId = $stateParams.personId;
    vm.person;

    activate();

    function activate() {
      var promises = [getPerson()];
      return $q.all(promises).then(function() {
        logger.info('Activated Person Detail View');
      });
    }

    function getPerson() {
      return Oracle.getPersonById(vm.personId).then(function(data) {
        vm.person = data.data;
        console.log(vm.person);
      });
    }
  }
})();
