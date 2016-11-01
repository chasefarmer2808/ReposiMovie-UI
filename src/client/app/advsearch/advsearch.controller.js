(function() {
  'use strict';

  angular
    .module('app.advsearch')
    .controller('AdvsearchController', AdvsearchController);

  MainsearchController.$inject = ['$q', 'logger', 'Oracle'];
  /*@ngInject*/
  function AdvsearchController($q, logger, Oracle) {
    var vm = this;
  }
})();
