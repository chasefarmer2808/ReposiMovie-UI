(function() {
  'use strict';

  angular
    .module('app.genresearch')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'genresearch',
        config: {
          url: '/genre',
          templateUrl: 'app/genresearch/genresearch.html',
          controller: 'GenresearchController',
          controllerAs: 'vm',
          title: 'genresearch',
          settings: {
            nav: 1,
            content: 'Movie by Genre'
          }
        }
      }
    ];
  }
})();
