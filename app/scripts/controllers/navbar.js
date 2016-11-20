(function(){
  'use strict';

  angular
    .module('angularOApp')
    .controller('NavbarController', function($location){
        var nav = this;
        nav.location = $location;

        nav.isCurrentRoute = function (route) {
          return route === nav.location.path();
        };
    });
})();
