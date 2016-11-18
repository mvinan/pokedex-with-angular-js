'use strict';

angular
.module('angularOApp')
.controller('PokedexController', ['pokemonService', '$routeParams', '$filter', '$scope', function (pokemonService, $routeParams, $filter, $scope) {
  var pkdex = this;
  var params = $routeParams.type;
  pkdex.title = '';

  if(params){
    var param = $routeParams.type;
    pokemonService.byType(param).then(function(data){

      var pokemonsByType = data.map(function(pokemon){
        return pokemon.pokemon;
      });

      pkdex.pokemons = pokemonsByType;
      pkdex.title = data.length +' Pokemons de tipo: ' + $filter('capitalizer')(params);
      pkdex.loadedConfirm();
      pkdex.copyPokemons();
    });

  }else{
    pokemonService.all().then(function (data) {
      pkdex.pokemons = data.results;
      pkdex.title = 'Pokedex';
      pkdex.loadedConfirm();
      pkdex.copyPokemons();
    });
  }

  pkdex.copyPokemons = function(){
    pkdex.allPokemons = angular.copy(pkdex.pokemons);
  };

  pkdex.loadedConfirm = function (){
      pkdex.loading = true;
      pkdex.loaded = true;
  };

  $scope.$on('SEND_QUERY', function(e, value){
    var pokemonInput = value.toLowerCase();

    if(pokemonInput.length > 0){
      pkdex.pokemons = pkdex.allPokemons.filter(function(pokemon){
        if(pokemon.name.search(value) > -1){
          return pokemon.name;
        }
      });
    }else{
      pkdex.pokemons = pkdex.allPokemons;
    }

    // Con filtro de Angular
    // pkdex.searchPokemon = value;
  });

}]);