(function() {
  'use strict';

  angular
    .module('app.castcrewsearch')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'castcrewsearch',
        config: {
          url: '/castcrew',
          templateUrl: 'app/castcrewsearch/castcrewsearch.html',
          controller: 'CastCrewsearchController',
          controllerAs: 'vm',
          title: 'castcrewsearch',
          settings: {
            nav: 1,
            content: '<i class="fa fa-dashboard"></i> Movie by Cast/Crew'
          }
        }
      }
    ];
  }
})();
