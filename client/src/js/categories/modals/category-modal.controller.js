export default class NewCategoryCtrl {
  constructor(Category, $uibModalInstance, editCategory ) {
    'ngInject';
    Object.assign(this, { Category, $uibModalInstance, editCategory });
  }

  save() {
    // let result = this.editCategory.id ?
    //   this.editCategory.$save() :
    //   this.Category.create(this.editCategory);

    let result = this.Category.updateOrCreate(this.editCategory);

    result.$promise
      .then(category => {
        this.$uibModalInstance.close(category);
      })
      .catch(rejection => {});
  }
}