import html from './app-header.component.html';

class AppHeaderCtrl {
  constructor($state, User) {
    'ngInject';
    Object.assign(this, { $state, User });
  }

  logout() {
    this.User.logout().$promise
      .then(() => this.$state.go('app.login'));
  }
}

const AppHeader = {
  bindings: {},
  controller: AppHeaderCtrl,
  template: html
};

export default AppHeader;