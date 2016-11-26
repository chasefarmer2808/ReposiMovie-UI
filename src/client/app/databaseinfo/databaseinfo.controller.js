(function() {
	'use strict'

	angular
		.module('app.databaseinfo')
		.controller('DatabaseinfoController', DatabaseinfoController)

	DatabaseinfoController.$inject = ['$q', 'logger', 'Oracle'];
	/*@ngInject*/
	function DatabaseinfoController($q, logger, Oracle) {
		var vm = this;
		vm.counts;
		vm.total = 0;

		activate();

	    function activate() {
	      var promises = [];
	      return $q.all(promises).then(function() {
	        logger.info('Activated DB Info View');
	      });
	    }

	    vm.getTableCounts = function() {
	    	return Oracle.getTableCounts().then(function(data) {
	    		vm.counts = data.data;

	    		vm.counts.forEach(function(count) {
	    			vm.total += count.count;
	    		});
	    	})
	    }
	}

})();