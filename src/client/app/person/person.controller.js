(function() {
  'use strict';

  angular
    .module('app.person')
    .controller('PersonController', PersonController);

  PersonController.$inject = ['$q', 'logger', 'Oracle'];
  /*@ngInject*/
  function PersonController($q, logger, Oracle) {
    var vm = this;
  }
})();
