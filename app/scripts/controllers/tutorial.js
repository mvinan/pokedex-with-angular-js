'use strict';

/**
 * @ngdoc function
 * @name angularOApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of angularOApp
 */

angular.module('angularOApp')
  .controller('TutorialCtrl', function ($http) {
    var tutorial = this;
    tutorial.message = 'Hola mundo in AngularJS!';

    tutorial.users = [];

    $http.get('http://jsonplaceholder.typicode.com/users')
      .success(function(results){
        tutorial.users = results;
      })
      .error(function(err){
        throw err;
      });

    tutorial.users = tutorial.users;

    tutorial.newUser = {};
    tutorial.addUSer = function(){
      tutorial.users.push(tutorial.newUser);
      tutorial.newUser ={};
    };

  });
