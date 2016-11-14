angular.module('app').factory('Oracle', ['$http', '$location',
  function($http, $location) {
    var methods = {
      getMoviesByTitle: function(title) {
        var query = (!title)? '' : ('?title=' + title);
        return $http.get('http://' + $location.host() + ':' + '5000' + '/api/v1/search_title' + query);
      },

      getMoviesByGenre: function(genre) {
        var query = ''
        if (genre) {
          if (genre.length > 0) {
            query = '?'
            for (var i = 0; i < genre.length; i++) {
              if (i > 0)
                query += '&';
              query += 'genre=' + genre[i];
            }
          }
        }
	return $http.get('http://' + $location.host() + ':' + '5000' + '/api/v1/search_genre' + query);
      },

      getMoviesByCastCrew: function(name) {
        var query = ''
        if (name) {
          if (name.length > 0) {
            query = '?'
            for (var i = 0; i < name.length; i++) {
              if (i > 0)
                query += '&';
              query += 'name=' + name[i].toLowerCase();
            }
          }
        }
	return $http.get('http://' + $location.host() + ':' + '5000' + '/api/v1/search_castcrew' + query);
      },

      getMovieById: function(movie_id) {
        var query = (!movie_id)? '' : ('?movie_id=' + movie_id);
	return $http.get('http://' + $location.host() + ':' + '5000' + '/api/v1/movie' + query);
      },

      getPersonById: function(person_id) {
        var query = (!person_id)? '' : ('?person_id=' + person_id);
	return $http.get('http://' + $location.host() + ':' + '5000' + '/api/v1/person' + ((!query)? '' : query));
      },
	  
	  getTop10: function() {
        var host = $location.host(),
            port = '5000',
            path = '/api/v1/top10?option=top10';

        return $http.get('http://' + host + ':' + port + path);
      },
	  
	  getTop10_box: function() {
        var host = $location.host(),
            port = '5000',
            path = '/api/v1/top10?option=top10_box';

        return $http.get('http://' + host + ':' + port + path);
      },

      getAllGenres: function() {
        var host = $location.host(),
            port = '5000',
            path = '/api/v1/get_all_genres';

        return $http.get('http://' + host + ':' + port + path);
      }
	  
	  
	  
    };
    return methods;
  }
]);
