import User from './user';
import Events from './events';

const stores = {
  userStore: new User(),
  eventStore: new Events()
};

export default stores;
