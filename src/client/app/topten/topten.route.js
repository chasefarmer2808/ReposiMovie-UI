(function() {
  'use strict';

  angular
    .module('app.topten')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'topten',
        config: {
          url: '/topten',
          templateUrl: 'app/topten/topten.html',
          controller: 'TopTenController',
          controllerAs: 'vm',
          title: 'TopTen',
          settings: {
            nav: 5,
            content: 'Top 10'
          }
        }
      }
    ];
  }
})();
