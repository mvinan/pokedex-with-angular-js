(function(){
  'use strict';
  angular.module('angularOApp')
    .directive('pkNavBar', function(){
      return {
        restrict: 'E',
        templateUrl: 'views/partials/pk-navbar.html',
        controller: function(){
          var nav = this;
          
          nav.getActiveItem = function (){
            return nav.activeItem;
          };

          nav.setActiveItem = function(itemName){
            nav.activeItem = itemName;
          };
        },
        controllerAs: 'nav'
      };
    });
})();
