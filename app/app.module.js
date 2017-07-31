(function() {
  'use strict';

  angular.module('app', [
    // Angular modules 
    'ui.router',
    'ngSanitize',
    "ngProgress",
    // Custom modules 

  ])
  .run(['$rootScope', 'ngProgressFactory', 'Idle', 'ngDialog', 'authr_client', '$timeout', '$transitions',
    function ($rootScope, ngProgressFactory, Idle, ngDialog, authr_client, $timeout, $transitions) {
      var progressbar = ngProgressFactory.createInstance();
      progressbar.setColor("#dd1212");

      // progress bar middleware... just for fun =D
      $transitions.onStart({}, function (trans) {
        progressbar.start();
        return trans.promise.then(progressbar.complete());
      });
    }
  ])
  .config(['$httpProvider', function ($httpProvider) {
    // TODO: Add future config here
  }])
}());