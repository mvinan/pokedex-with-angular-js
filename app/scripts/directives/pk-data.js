'use strict';
var app = angular.module('angularOApp');

app.directive('pkData', function(){
  return {
    restrict: 'E', //Elemento HTML
    templateUrl: 'views/partials/pokemon-data.html', // Show html the content
  };
});

app.directive('pkHeading', function(){
  return {
    restrict: 'E', // Directiva como atributo 'A'
    templateUrl: 'views/partials/pk-heading.html',
    // controller: 'PokemonController',
    // controllerAs: 'pk'
  };
});