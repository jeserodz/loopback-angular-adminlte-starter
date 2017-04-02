import html from './dashboard.template.html';

export default function dashboardConfig($stateProvider) {
  $stateProvider.state('app.dashboard', {
    url: '/dashboard',
    controller: 'DashboardCtrl as $ctrl',
    template: html
  });
}