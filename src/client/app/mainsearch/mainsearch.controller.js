(function() {
  'use strict';

  angular
    .module('app.mainsearch')
    .controller('MainsearchController', MainsearchController);

  MainsearchController.$inject = ['$q', 'logger', 'Oracle'];
  /*@ngInject*/
  function MainsearchController($q, logger, Oracle) {
    var vm = this;
  }
})();
