(function() {
  'use strict';

  angular
    .module('app.topten')
    .controller('TopTenController', TopTenController);

  TopTenController.$inject = ['$q', 'logger', 'Oracle'];
  /*@ngInject*/
  function TopTenController($q, logger, Oracle) {
    var vm = this;
	vm.movies;
	vm.movies_box;
	
	activate();
	
	function activate() {
      var promises = [getTop10()];
      return $q.all(promises).then(function() {
        logger.info('Activated Genre View');
      });
    }
	
	function getTop10() {
      return Oracle.getTop10().then(function(data) {
        vm.movies = data.data;
      });
    }
	
	function getTop10_box() {
      return Oracle.getTop10_box().then(function(data) {
        vm.movies_box = data.data;
      });
    }
  }
})();
