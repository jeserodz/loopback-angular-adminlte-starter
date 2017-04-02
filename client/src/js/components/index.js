import angular from 'angular';

const componentsModule = angular.module('app.components', []);

import AppHeader from './layout/app-header.component';
componentsModule.component('appHeader', AppHeader);

import AppSidebar from './layout/app-sidebar.component';
componentsModule.component('appSidebar', AppSidebar);

import AppFooter from './layout/app-footer.component';
componentsModule.component('appFooter', AppFooter);

import AppControlSidebar from './layout/app-control-sidebar.component';
componentsModule.component('appControlSidebar', AppControlSidebar);

export default componentsModule;