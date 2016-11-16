(function () {
  'use strict';

  angular.module('trendwise', [
      'trendwise.config',  
      'trendwise.routes',
      'trendwise.authentication'
    ]);
  
  angular
    .module('trendwise.config', []);

  angular
    .module('trendwise.routes', ['ngRoute']);

  angular
    .module('trendwise')
    .run(run);

  run.$inject = ['$http'];

  /**
  * @name run
  * @desc Update xsrf $http headers to align with Django's defaults
  */
  function run($http) {
    $http.defaults.xsrfHeaderName = 'X-CSRFToken';
    $http.defaults.xsrfCookieName = 'csrftoken';
  }
  
})();