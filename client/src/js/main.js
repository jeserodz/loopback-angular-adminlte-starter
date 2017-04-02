// custom styles
import '../sass/main.scss';

import './api';
import './config';
import './components';
import './login';
import './dashboard';
import './categories';

// YOUR APP CODE STARTS HERE
const app = angular.module('app', [
  'ui.router', 
  'ui.bootstrap',
  'ngResource',
  'app.api',
  'app.config',
  'app.components',
  'app.login',
  'app.dashboard',
  'app.categories'
]);

angular.bootstrap(document.querySelector('html'), ['app']);