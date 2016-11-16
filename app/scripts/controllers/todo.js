'use strict';

angular.module('angularOApp')
  .controller('TodoController', function ($scope, localStorageService) {
    var todo = this;

    if(localStorageService.get('angular-todo')){
      todo.activities = localStorageService.get('angular-todo');
    } else {
      todo.activities = [];
    }

    /**
     * {
     *  description: 'Terminar el curso de Angularjs',
     *  date: 'Date now()'
     * }
     */

    $scope.$watchCollection('todo.activities', function (){
      localStorageService.set('angular-todo', todo.activities);
    });

    function addActivity () {
      todo.activities.push(todo.newActivity);
      todo.newActivity = {};
    }

    function cleanTodo () {
      todo.activities = [];
    }

    function clicked (e) {
      console.log('clicked', e);
    }

    todo.addActivity = addActivity;
    todo.cleanTodo = cleanTodo;
    todo.clicked = clicked;
  });