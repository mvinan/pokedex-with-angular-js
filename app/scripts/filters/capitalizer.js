'use strict';

angular.module('angularOApp')
  .filter('capitalizer', ['$filter', function($filter){
    return function(input){
      input = input.toString();
      var firstletter = input.split('')[0].toUpperCase();
      var otherletters = input.slice(1);
      var capitalizer = firstletter + otherletters;
      return $filter('normalizer')(capitalizer);
    };
  }])
  .filter('normalizer', function(){
    return function(input){
      var newvalue = input.replace(/\W/g, ' ');
      return newvalue;
    };
  });