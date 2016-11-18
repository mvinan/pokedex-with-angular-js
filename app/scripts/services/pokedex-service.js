'use strict';

angular
  .module('angularOApp')
  .factory('pokemonService', ['$http', '$q', function($http, $q){
    function all(n){
      if(n === null || n === undefined){
        n = 151;
      }
      var deferred = $q.defer();
      $http.get('http://pokeapi.co/api/v2/pokemon?limit='+n)
        .success(function(data){
          deferred.resolve(data);
        });
        return deferred.promise;
    }

    function byName (name) {
      name = name.toLowerCase();
      var deferred = $q.defer();
      all().then(function(data){
        var results = data.results.filter(function(pokemon){
          return pokemon.name === name;
        });

        if(results.length > 0){
          deferred.resolve(results[0]);}
        else {
          deferred.reject();}

      });

      return deferred.promise;
    }

    function byType(type){
      type = type.toLowerCase();
      var deferred = $q.defer();

      $http.get('http://pokeapi.co/api/v2/type/'+ type)
        .success(function(data){
          deferred.resolve(data.pokemon);
        })
        .catch(function(){
          deferred.reject();
        });

      return deferred.promise;
    }

    return {
      all: all,
      byName: byName,
      byType: byType
    };
  }]);