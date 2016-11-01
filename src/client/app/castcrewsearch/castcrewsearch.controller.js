(function() {
  'use strict';

  angular
    .module('app.castcrewsearch')
    .controller('CastCrewsearchController', CastCrewsearchController);

  CastCrewsearchController.$inject = ['$q', 'logger', 'Oracle'];
  /*@ngInject*/
  function CastCrewsearchController($q, logger, Oracle) {
    var vm = this;
  }
})();
