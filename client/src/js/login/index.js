import angular from 'angular';

const loginModule = angular.module('app.login', []);

import config from './login.config';
loginModule.config(config);

import LoginCtrl from './login.controller';
loginModule.controller('LoginCtrl', LoginCtrl);

export default loginModule;