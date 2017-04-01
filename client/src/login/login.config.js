import loginTemplate from './login.template.html';

export default function config($stateProvider) {
  $stateProvider.state('app.login', {
    url: '/login',
    controller: 'LoginCtrl as $ctrl',
    template: loginTemplate
  });
}