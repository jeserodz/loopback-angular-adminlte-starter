export default function routerConfig($stateProvider, $urlRouterProvider) {

  // abstract root route
  // doesn't need controller
  $stateProvider.state('app', {
    url: '',
    abstract: true,
    template: '<ui-view></ui-view>'
  });

  $urlRouterProvider.otherwise('/dashboard');
}