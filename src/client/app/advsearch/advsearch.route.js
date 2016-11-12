(function() {
  'use strict';

  angular
    .module('app.advsearch')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'advsearch',
        config: {
          url: '/advanced',
          templateUrl: 'app/advsearch/advsearch.html',
          controller: 'AdvsearchController',
          controllerAs: 'vm',
          title: 'advsearch',
          settings: {
            nav: 6,
            content: 'Advanced Search'
          }
        }
      }
    ];
  }
})();
