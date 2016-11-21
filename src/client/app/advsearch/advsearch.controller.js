(function() {
  'use strict';

  angular
    .module('app.advsearch')
    .controller('AdvsearchController', AdvsearchController);

  AdvsearchController.$inject = ['$q', 'logger', 'Oracle'];
  /*@ngInject*/
  function AdvsearchController($q, logger, Oracle) {
    var vm = this;
    vm.genres;
    vm.companies;
    vm.cast;
    vm.crew;
    vm.movies;

    activate();

    function activate() {
      var promises = [getAllGenres(), getAllCompanies()];
      return $q.all(promises).then(function() {
        logger.info('Activated Adv Search View');
      });
    }

    function getAllGenres() {
      return Oracle.getAllGenres().then(function(data) {
        vm.genres = data.data;
      });
    }

    function getAllCompanies() {
      return Oracle.getAllCompanies().then(function(data) {
        vm.companies = data.data;
      });
    }

    function getAllCast() {
      return Oracle.getAllCast().then(function(data) {
        vm.cast = data.data;
      });
    }

    function getAllCrew() {
      return Oracle.getAllCrew().then(function(data) {
        vm.crew = data.data;
      });
    }
  }
})();
