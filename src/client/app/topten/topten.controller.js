(function() {
  'use strict';

  angular
    .module('app.topten')
    .controller('TopTenController', TopTenController);

  TopTenController.$inject = ['$q', 'logger', 'Oracle'];
  /*@ngInject*/
  function TopTenController($q, logger, Oracle) {
    var vm = this;
  }
})();
