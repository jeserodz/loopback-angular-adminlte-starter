export default class MainController {
  constructor($state) {
    Object.assign(this, {$state});

    this.app = {
      title: 'Ingsecom Computadoras'
    };
  }

  isLoginPage() {
    return this.$state.current.name === 'app.login';
  }
}