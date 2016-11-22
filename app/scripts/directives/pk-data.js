'use strict';
var app = angular.module('angularOApp');

app.directive('pkData', function () {
  return {
    restrict: 'E', //Elemento HTML
    templateUrl: 'views/partials/pokemon-data.html', // Show html the content
  };
});

// Pk Heading only write a simple heading for each pokemon
app.directive('pkHeading', function () {
  return {
    restrict: 'E', // Para establecer una directiva como atributo 'A'
    templateUrl: 'views/partials/pk-heading.html',
  };
});
