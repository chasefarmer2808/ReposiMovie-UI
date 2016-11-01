(function() {
  'use strict';

  angular
    .module('app.searchpeople')
    .controller('SearchPeopleController', SearchPeopleController);

  SearchPeopleController.$inject = ['$q', 'logger', 'Oracle'];
  /*@ngInject*/
  function SearchPeopleController($q, logger, Oracle) {
    var vm = this;
  }
})();
