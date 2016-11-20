'use strict';

angular
  .module('angularOApp')
  .controller('PokemonByNameController', ['$routeParams','pokemonService', function($routeParams, pokemonService){
    var pk = this;
    var name = $routeParams.name;

    pokemonService.byName(name)
      .then(function(data){
        pk.name = data.name;
      });

  }]);
