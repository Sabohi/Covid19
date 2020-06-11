import {observable, action} from 'mobx';

class DetailStore {
  @observable DATA = '';
  @observable loading = false;

  @action
  updateData = (value, field) => {
    this[field] = value;
  };

  getDataApi() {
    console.warn('hhh');
    this.updateData(true, 'loading');
    this.updateData('', 'DATA');
    fetch('https://reactnative.dev/movies.json')
      .then(response => response.json())
      .then(json => {
        this.updateData(json.movies, 'DATA');
        this.updateData(false, 'loading');
      })
      .catch(error => {
        this.updateData(false, 'loading');
        console.error(error);
      });
  }
}

export default new DetailStore();
