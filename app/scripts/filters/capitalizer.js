'use strict';

angular.module('angularOApp')
  .filter('capitalizer', function(){
    return function(text){
      text = text.toString();
      var firstletter = text.split('')[0].toUpperCase();
      var otherletters = text.slice(1);
      return firstletter + otherletters;
    };
  });
