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
  }
})();
