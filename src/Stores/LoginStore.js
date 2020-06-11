import {observable, action} from 'mobx';

class LoginStore {
  @observable username = '';
  @observable password = '';

  @observable counter = 0;
  @action
  increment() {
    this.counter++;
    console.log('increment', this.counter);
  }

  @action
  decrement() {
    this.counter--;
    console.log('decrement', this.counter);
  }

  ///////////////////////////

  @action
  hanldeChange = (text, field) => {
    this[field] = text;
  };
}

export default new LoginStore();
