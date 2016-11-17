angular.module('app')
  .filter('decimalFilter', function() {
    return function(input) {
      if (!isNaN(input)) {
        input = Math.round(input*100)/100;
      }

      return input;
    };
  });
