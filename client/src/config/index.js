import angular from 'angular';
import lodash from 'lodash';

const configModule = angular.module('app.config', []);

import routerConfig from './router.config';
configModule.config(routerConfig);

import MainController from './main.controller';
configModule.controller('MainController', MainController);

configModule.run(($rootScope, $interval) => {
  'ngInject';

  /**
   * Fix layout on route changes
   */
  $rootScope.$on('$viewContentLoaded', function() {
    $.AdminLTE.layout !== undefined ? $.AdminLTE.layout.fix(): null;
  });

});

export default configModule;