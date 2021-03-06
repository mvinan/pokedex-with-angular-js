'use strict';

var app = angular.module('angularOApp');

app.controller('PokemonController', function ($http, $routeParams) {
    var pk = this;

    var params = $routeParams.name;
    pk.url = 'http://pokeapi.co/api/v2/';
    pk.tab = 1;
    pk.pokemon = {};
    pk.loading = false;

    function selectTab (tab) {
      pk.tab = tab;
    }

    //Comentarios
    function fetchPokemon (name) {
      var pokeName = name.trim().toLowerCase();
      pk.errMessage = false;
      pk.loading = true;

      $http.get(pk.url+ 'pokemon/' + pokeName)
        .then(function(poke){
          pk.loading = false;
          pk.distributeData(poke);
          pk.showPokeInfo = true;
        })
        .catch(function(err){
          if(err.status === 404){
            pk.loading = false;
            pk.errMessage = true;
            pk.showPokeInfo = true;
            throw err;
          }
        });
    }

    function searchNewPokemon () {
      pk.showPokeInfo = false;
      pk.tab = 1;
      fetchPokemon(pk.inputSearch);
    }

    function distributeData (poke) {
      var types = poke.data.types.map(function(t){
        return t.type.name;
      });

      var abilities = poke.data.abilities.map(function(a){
        return a.ability.name;
      });

      pk.pokemon = {
        id: poke.data.id,
        name: poke.data.name,
        type: types,
        height: poke.data.height,
        weight: poke.data.weight,
        abilities: abilities,
        stats: poke.data.stats,
      };
    }

    function nOfImages (n) {
      var times = [];
      for(var i=1; i <= n; i++){
        times.push(i);
      }

      return times;
    }

    if(params){
      pk.pokeName = params;
      pk.showPokeInfo = false;
      pk.tab = 1;
      fetchPokemon(pk.pokeName);
    }

    pk.selectTab = selectTab;
    pk.searchNewPokemon = searchNewPokemon;
    pk.fetchPokemon = fetchPokemon;
    pk.distributeData = distributeData;
    pk.nOfImages = nOfImages;

  });
