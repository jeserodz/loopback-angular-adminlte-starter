import angular from 'angular';

const dashboardModule = angular.module('app.dashboard', []);

import dashboardConfig from './dashboard.config';
dashboardModule.config(dashboardConfig);

import DashboardCtrl from './dashboard.controller';
dashboardModule.controller('DashboardCtrl', DashboardCtrl);

export default dashboardModule;