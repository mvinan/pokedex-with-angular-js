'use strict';

/**
 * @ngdoc overview
 * @name angularOApp
 * @description
 * # angularOApp
 *
 * Main module of the application.
 */
angular
  .module('angularOApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'LocalStorageModule',
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/tutorial', {
        templateUrl: 'views/tutorial.html',
        controller: 'TutorialCtrl',
        controllerAs: 'tutorial'
      })
      .when('/todo', {
        templateUrl: 'views/todo.html',
        controller: 'TodoController',
        controllerAs: 'todo'
      })
      .when('/pokedex', {
        templateUrl: 'views/pokedex.html',
        controller: 'PokedexController',
        controllerAs: 'pkdex'
      })
      .when('/pokemon/:name', {
        templateUrl: 'views/poke.html',
        controller: 'PokemonController',
        controllerAs: 'pk'
      })
      .when('/pokedex/search', {
        templateUrl: 'views/pokemon.html',
        controller: 'PokemonController',
        controllerAs: 'pk'
      })
      .when('/pokedex/:type', {
        templateUrl: 'views/pokedex.html',
        controller: 'PokedexController',
        controllerAs: 'pkdex'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
