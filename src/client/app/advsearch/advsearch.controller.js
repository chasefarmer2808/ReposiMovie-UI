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
    vm.selectedGenre = '';
    vm.companies = [' '];
    // vm.cast;
    // vm.crew;
    vm.minReleaseDate;
    vm.movies;
    vm.equalities = ['=', '>', '<'];

    vm.queryParams = {
      title: '',
      startDate: new Date(),
      endDate: new Date(),
      avgRating: {
        value: 0,
        equality: '>'
      },
      ratingCount: {
        value: 0,
        equality: '>'
      },
      revenue: {
        value: 0,
        equality: '>'
      },
      budget: {
        value: 0,
        equality: '>'
      },
      runtime: {
        value: 0,
        equality: '>'
      },
      genres: [],
      companies: [],
      people: [],
      limit: 25
    };

    vm.clearGenres = function() {
      vm.queryParams.genres = [];
    }

    vm.clearCompanies = function() {
      vm.queryParams.companies = [];
    }

    vm.clearPeople = function() {
      vm.queryParams.people = [];
    }

    vm.queryMovies = function() {
      // console.log(vm.queryParams);
      return Oracle.advSearch(vm.queryParams).then(function(data) {
        vm.movies = data.data;
      });
    }

    activate();

    function activate() {
      var promises = [getAllGenres(), getMinReleaseDate()];
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

    function getMinReleaseDate() {
      return Oracle.getMinReleaseDate().then(function(data) {
        vm.minReleaseDate = data.data;
        vm.queryParams.startDate = new Date(vm.minReleaseDate);
      });
    }

    // function getAllCast() {
    //   return Oracle.getAllCast().then(function(data) {
    //     vm.cast = data.data;
    //   });
    // }
    //
    // function getAllCrew() {
    //   return Oracle.getAllCrew().then(function(data) {
    //     vm.crew = data.data;
    //   });
    // }
  }
})();
