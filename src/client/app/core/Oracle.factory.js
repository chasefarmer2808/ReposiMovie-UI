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

	  getTop10_genres: function() {
        var host = $location.host(),
            port = '5000',
            path = '/api/v1/top10?option=top10_genres';

        return $http.get('http://' + host + ':' + port + path);
      },

	  getTop10_worst: function() {
        var host = $location.host(),
            port = '5000',
            path = '/api/v1/top10?option=top10_worst';

        return $http.get('http://' + host + ':' + port + path);
      },

      getAllGenres: function() {
        var host = $location.host(),
            port = '5000',
            path = '/api/v1/get_all_genres';

        return $http.get('http://' + host + ':' + port + path);
      },

      getAllCompanies: function() {
        var host = $location.host(),
            port = '5000',
            path = '/api/v1/get_all_companies';

        return $http.get('http://' + host + ':' + port + path);
      },

      getAllCast: function() {
        var host = $location.host(),
            port = '5000',
            path = '/api/v1/get_all_cast';

        return $http.get('http://' + host + ':' + port + path);
      },

      getAllCrew: function() {
        var host = $location.host(),
            port = '5000',
            path = '/api/v1/get_all_crew';

        return $http.get('http://' + host + ':' + port + path);
      },

      getMinReleaseDate: function() {
        var host = $location.host(),
            port = '5000',
            path = '/api/v1/get_min_release_date';

        return $http.get('http://' + host + ':' + port + path);
      },

      advSearch: function(params) {
        var host = $location.host(),
            port = '5000',
            path = '/api/v1/adv_search';

        var queryString = '?';


        for (var key in params) {
          if (params.hasOwnProperty(key)) {
            if (params[key] instanceof Date) {
              var dateStr = (params[key].getMonth() + 1) + '-' + params[key].getDate() + '-' + params[key].getFullYear();
              queryString += '&' + key + '=' + dateStr;
            } else if (params[key].equality) {
              queryString += '&' + key + '=' + params[key].value + params[key].equality;
            } else if (params[key].length > 0 && Array.isArray(params[key])) {
              params[key].forEach(function(val) {
                queryString += '&' + key + '=' + val;
              });
            } else if (params[key].length > 0) {
              queryString += '&' + key + '=' + params[key];
            }
          }
        }

        if (queryString[1] === '&') {
          queryString = queryString.slice(0, 1) + queryString.slice(2, queryString.length);
        }
        console.log(queryString);
        return $http.get('http://' + host + ':' + port + path + queryString);
      },
    };
    return methods;
  }
]);
