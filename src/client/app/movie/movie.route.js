(function() {
  'use strict';

  angular
    .module('app.movie')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'movie',
        config: {
          url: '/movie/:movieId',
          templateUrl: 'app/movie/movie.html',
          controller: 'MovieController',
          controllerAs: 'vm',
          title: 'Movie',
          settings: {
            nav: 0,
            content: 'Movie'
          }
        }
      }
    ];
  }
})();
