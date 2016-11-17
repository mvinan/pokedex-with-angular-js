'use strict';

angular
.module('angularOApp')
.controller('PokedexController', ['pokemonService', '$routeParams', function (pokemonService, $routeParams) {
  var pkdex = this;
  pokemonService.all().then(function (data) {
    pkdex.pokemons = data.results;
    pkdex.loading = true;
    pkdex.loaded = true;
  });

}]);