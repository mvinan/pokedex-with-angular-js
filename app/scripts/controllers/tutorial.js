'use strict';

/**
 * @ngdoc function
 * @name angularOApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of angularOApp
 */

angular.module('angularOApp')
  .controller('TutorialCtrl', function () {
    var tutorial = this;
    tutorial.name = 'Miguel';
  });