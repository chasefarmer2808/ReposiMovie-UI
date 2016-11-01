(function() {
  'use strict';

  angular
    .module('app.searchpeople')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'searchpeople',
        config: {
          url: '/',
          templateUrl: 'app/searchpeople/searchpeople.html',
          controller: 'SearchPeopleController',
          controllerAs: 'vm',
          title: 'searchpeople',
          settings: {
            nav: 1,
            content: '<i class="fa fa-dashboard"></i> Search People'
          }
        }
      }
    ];
  }
})();
