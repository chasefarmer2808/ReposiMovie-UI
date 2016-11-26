(function() {
  'use strict';

  angular
    .module('app.databaseinfo')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'databaseinfo',
        config: {
          url: '/databaseinfo',
          templateUrl: 'app/databaseinfo/databaseinfo.html',
          controller: 'DatabaseinfoController',
          controllerAs: 'vm',
          title: 'databaseinfo',
          settings: {
            nav: 7,
            content: 'Database Info'
          }
        }
      }
    ];
  }
})();
