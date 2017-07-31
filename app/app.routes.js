(function () {
    'use strict';
    
    //Define the route management for the main angular module
    angular.module('app')
        .config(["$stateProvider", '$urlRouterProvider', '$locationProvider', '$location', '$urlMatcherFactoryProvider',
            function ($stateProvider, $urlRouterProvider, APP_CONFIG, $locationProvider, $urlMatcherFactoryProvider) {
                $stateProvider
                    .state('app', {
                        url: "",
                        abstract: true,
                        templateUrl: '/app/_layout.html',
                        resolve: {
                            resolveData: [
                                '$location', function resolve($location) {
                                    console.log(`Resolving at every route. Going to relative path ${$location.path()}`);
                                    return $location.absUrl();
                                }
                            ]
                        }
                    })
                    .state('app.main', {
                        url: "/",
                        template: "<div>{{message}}}/div>",
                        controller: [
                            '$scope', function proxyCtrl($scope) {
                                scope.message = "This will become a component";
                            }
                        ]
                    });

                $urlRouterProvider.otherwise("/");
    }]);
})();