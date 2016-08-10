'use strict';

angular.module('App', [
  'ngRoute',
  'Fizz_buzz'
])
.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'scripts/main/views/dashboard.html',
  });
});
