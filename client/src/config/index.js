import angular from 'angular';

const configModule = angular.module('app.config', []);

import routerConfig from './router.config';
configModule.config(routerConfig);

import MainController from './main.controller';
configModule.controller('MainController', MainController);

export default configModule;