import html from './app-header.component.html';

class AppHeaderCtrl {
  constructor() {
    'ngInject';
  }
}

const AppHeader = {
  bindings: {},
  controller: AppHeaderCtrl,
  template: html
};

export default AppHeader;