import { observable } from 'mobx';

class User {
  @observable email: '';
  @observable password: '';

  @observable user: null;
}

export default new User();
