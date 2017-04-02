import categoryModalTemplate from './modals/category-modal.template.html';
import CategoryCtrl from './modals/category-modal.controller';

export default class CategoriesCtrl {
  constructor(categories, Category, $uibModal) {
    'ngInject';
    Object.assign(this, { categories, Category, $uibModal });
  }

  loadCategories() {
    this.Category.find({}).$promise
      .then(categories => this.categories = categories);
  }

  openCategoryModal(editCategory = { name: '' }) {
    editCategory = angular.copy(editCategory);
    let { result } = this.$uibModal.open({
      animation: true,
      size: 'md',
      template: categoryModalTemplate,
      controller: CategoryCtrl,
      controllerAs: '$ctrl',
      resolve: { editCategory: editCategory }
    });
    
    result
      .then(newCategory => this.loadCategories())
      .catch(rejection => null);
  }
}