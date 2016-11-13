/**
* Register controller
* @namespace trendwise.authentication.controllers
*/
(function () {
  'use strict';

  angular
    .module('trendwise.authentication.controllers')
    .controller('RegisterController', RegisterController);

  RegisterController.$inject = ['$location', '$scope', 'Authentication'];

  /**
  * @namespace RegisterController
  */
  function RegisterController($location, $scope, Authentication) {
    var vm = this;

    vm.register = register;

    /**
    * @name register
    * @desc Register a new user
    * @memberOf trendwise.authentication.controllers.RegisterController
    */
    function register() {
      Authentication.register(vm.email, vm.password, vm.username);
    }
  }
})();