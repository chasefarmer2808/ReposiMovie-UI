(function() {
  'use strict';

  angular
    .module('app.dashboard')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'mainsearch',
        config: {
          url: '/',
          templateUrl: 'app/mainsearch/mainsearch.html',
          controller: 'MainsearchController',
          controllerAs: 'vm',
          title: 'mainsearch',
          settings: {
            nav: 1,
            content: '<i class="fa fa-dashboard"></i> Movie by Title'
          }
        }
      }
    ];
  }
})();
