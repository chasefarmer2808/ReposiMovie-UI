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
        state: 'person',
        config: {
          url: '/person/:personId',
          templateUrl: 'app/person/person.html',
          controller: 'PersonController',
          controllerAs: 'vm',
          title: 'Person',
          settings: {
            nav: 0,
            content: 'Person'
          }
        }
      }
    ];
  }
})();
