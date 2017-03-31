export default function routerConfig($stateProvider, $urlRouterProvider) {
  $stateProvider.state('app', {
    url: '',
    abstract: true,
    controller: 'MainController as $ctrl',
    template: '<ui-view></ui-view>'
  });

  $urlRouterProvider.otherwise('/dashboard');
}