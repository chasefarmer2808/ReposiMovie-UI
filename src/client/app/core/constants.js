/* global toastr:false, moment:false */
(function() {
  'use strict';

  angular
    .module('app.core')
    .constant('toastr', toastr)
    .constant('moment', moment)
    .constant('movieTableColumns', ['title', 'overview', 'rating_average', 'run_time'])
    .constant('castTableColumns', ['name', 'role'])
    .constant('crewTableColumns', ['name', 'job', 'department']);
})();
