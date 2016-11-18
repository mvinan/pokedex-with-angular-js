'use strict';

angular.module('angularOApp')
  .directive('pkFilter', ['pokemonService',function(pokemonService){
    return {
      restrict: 'E',
      templateUrl: 'views/partials/pk-filter.html',
      controllerAs: 'fltr',
      scope: {
        text: '@'
      },
      bindToController: true,
      controller: function($scope){
        var fltr = this;
        fltr.placeholder = fltr.text;

        fltr.changeValue = function(){
          $scope.$emit('SEND_QUERY', fltr.pokemonName);
        };
      }
    };
  }]);