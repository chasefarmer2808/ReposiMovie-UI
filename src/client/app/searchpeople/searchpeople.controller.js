(function() {
  'use strict';

  angular
    .module('app.searchpeople')
    .controller('SearchPeopleController', SearchPeopleController);

  SearchPeopleController.$inject = ['$q', 'logger', 'Oracle'];
  /*@ngInject*/
  function SearchPeopleController($q, logger, Oracle) {
    var vm = this;
    Oracle.getPersonById(500)
      .then(function(response) {
        vm.person = response.data;
        console.log(response.data);
      }, function(error) {
        console.log(error);
    });  
  }
})();
