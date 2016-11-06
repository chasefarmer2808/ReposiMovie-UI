(function() {
  'use strict';

  angular
    .module('app.advsearch')
    .controller('AdvsearchController', AdvsearchController);

  AdvsearchController.$inject = ['$q', 'logger', 'Oracle'];
  /*@ngInject*/
  function AdvsearchController($q, logger, Oracle) {
    var vm = this;
  }
})();
