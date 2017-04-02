export default class LoginCtrl {
  constructor($state, User) {
    'ngInject';
    Object.assign(this, { $state, User });
    this.email = '';
    this.passwowrd = '';
  }

  login() {
    this.User.login({ email: this.email, password: this.password }).$promise
      .then(response => this.$state.go('app.dashboard.categories'))
      .catch(rejection => console.log(rejection));
  }
}