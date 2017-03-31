import '../../node_modules/admin-lte/bootstrap/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.css';
import '../../node_modules/ionicons/dist/css/ionicons.css';
import '../../node_modules/admin-lte/dist/css/AdminLTE.css';
import '../../node_modules/admin-lte/dist/css/skins/_all-skins.css';

import 'jquery';
import 'bootstrap';
import 'admin-lte';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngResource from 'angular-resource';
import './config';
import './components';
import './dashboard';
import './categories';

// YOUR APP CODE STARTS HERE
const app = angular.module('app', [uiRouter, ngResource, 'app.config', 'app.components', 'app.dashboard', 'app.categories']);

angular.bootstrap(document.querySelector('html'), ['app']);