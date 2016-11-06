angular.module('app').factory('Oracle', ['$http', '$location',
  function($http, $location) {
    var methods = {
      getMoviesByTitle: function(query) {
        return $http.get('http://' + $location.host() + ':' + '5000' + '/api/v1/search_title' + ((!query)? '' : query));
      },

      getMoviesByGenre: function(query) {
	      return $http.get('http://' + $location.host() + ':' + '5000' + '/api/v1/search_genre' + ((!query)? '' : query));
      },

      getMoviesByCastCrew: function(query) {
	      return $http.get('http://' + $location.host() + ':' + '5000' + '/api/v1/search_castcrew' + ((!query)? '' : query));
      },

      getMovieById: function(query) {
	      return $http.get('http://' + $location.host() + ':' + '5000' + '/api/v1/movie' + ((!query)? '' : query));
      },

      getPersonById: function(query) {
	      return $http.get('http://' + $location.host() + ':' + '5000' + '/api/v1/person' + ((!query)? '' : query));
      },
    };
    return methods;
  }
]);
