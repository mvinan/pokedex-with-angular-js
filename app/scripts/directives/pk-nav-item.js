(function(){
  'use strict';
  angular.module('angularOApp')
    .directive('pkNavItem', function(){
      return {
        restrict: 'E',
        replace: true,
        templateUrl: 'views/partials/pk-nav-item.html',
        require: '^pkNavBar',
        scope:{
          to:'@',
          name:'@'
        },
        link: function(scope, element, attrs, pkNavBar){
          pkNavBar.setActiveItem('home');
          scope.makeActive = function(){
            pkNavBar.setActiveItem(scope.name);
          };

          scope.itemActive = function(){
            return pkNavBar.getActiveItem() === scope.name;
          };
        }
      };
    });
})();
