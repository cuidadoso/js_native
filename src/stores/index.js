import User from './user';
import Events from './events';
import Navigation from './navigation';

const stores = {};

Object.assign(stores, {
  userStore: new User(stores),
  eventStore: new Events(stores),
  navigationStore: new Navigation(stores)
});

export default stores;
