angular.module('app').factory('Oracle', ['$http', '$location',
  function($http, $location) {
    var methods = {
      getMoviesByTitle: function(title, limit) {
        var query = (!title)? '' : ('?title=' + title);

        if (limit) {
          if (query.indexOf('?') > -1) {
            query += '&limit=' + limit;
          } else {
            query += '?limit=' + limit;
          }
        }

        return $http.get('http://' + $location.host() + ':' + '5000' + '/api/v1/search_title' + query);
      },

      getMoviesByGenre: function(genre, limit) {
        var query = ''
        if (genre) {
          if (genre.length > 0) {
            query = '?';
            for (var i = 0; i < genre.length; i++) {
              if (i > 0)
              query += '&';
              query += 'genre=' + genre[i];
            }
          }
        }

        if (limit) {
          if (query.indexOf('?') > -1) {
            query += '&limit=' + limit;
          } else {
            query += '?limit=' + limit;
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

      getMoviesByDirector: function(name) {
        var host = $location.host(),
            port = '5000',
            path = '/api/v1/movies_by_director';

        if (name) {
          path += '?name=' + name;
        }

        return $http.get('http://' + host + ':' + port + path);
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

      getAllPeople: function() {
        var host = $location.host(),
            port = '5000',
            path = '/api/v1/get_all_people';

        return $http.get('http://' + host + ':' + port + path);
      },

      getMinReleaseDate: function() {
        var host = $location.host(),
            port = '5000',
            path = '/api/v1/get_min_release_date';

        return $http.get('http://' + host + ':' + port + path);
      },

      getTableCounts: function() {
        var host = $location.host(),
            port = '5000',
            path = '/api/v1/get_table_counts';

        return $http.get('http://' + host + ':' + port + path);
      },
      getPeopleByName: function(name, limit){
        var query = (!name)? '' : ('?name=' + name);
        if(limit){
          if(query.indexOf('?') > -1){
            query += '&limit=' + limit;
          }else{
            query += '?limit=' + limit;
          }
        }

        return $http.get('http://' + $location.host() + ':' + '5000' + '/api/v1/search_name' + query);
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
              if (params[key].equality === '=')
                params[key].equality = '%3D';
              queryString += '&' + key + '=' + params[key].equality + '+' + params[key].value;
            } else if (params[key].length > 0 && Array.isArray(params[key])) {
              params[key].forEach(function(val) {
                queryString += '&' + key + '=' + val;
              });
            } else if (params[key].length > 0) {
              queryString += '&' + key + '=' + params[key];
            } else if (Number.isInteger(params[key])) {
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
