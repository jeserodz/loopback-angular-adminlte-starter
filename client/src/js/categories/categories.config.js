import categoriesTemplate from './categories.template.html';

export default function config($stateProvider) {
  $stateProvider.state('app.dashboard.categories', {
    url: '/categories',
    controller: 'CategoriesCtrl as $ctrl',
    template: categoriesTemplate,
    resolve: {
      categories: (Category) => {
        'ngInject';
        return Category.find({}).$promise;
      }
    }
  });
}