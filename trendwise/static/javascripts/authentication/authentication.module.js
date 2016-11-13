(function () {
  'use strict';

  angular
    .module('trendwise.authentication', [
      'trendwise.authentication.controllers',
      'trendwise.authentication.services'
    ]);

  angular
    .module('trendwise.authentication.controllers', []);

  angular
    .module('trendwise.authentication.services', ['ngCookies']);
})();