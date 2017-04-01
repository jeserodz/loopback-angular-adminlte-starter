export default class MainController {
  constructor($state, User) {
    Object.assign(this, {$state, User});
    this.app = {
      title: 'Ingsecom Computadoras'
    };
  }

  $onInit() {
    this.User.isAuthenticated() ? null : this.$state.go('app.login');
  }

  isLoginPage() {
    return this.$state.current.name === 'app.login';
  }
}