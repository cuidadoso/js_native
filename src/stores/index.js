import User from './user';
import Events from './events';
import Navigation from './navigation';
import People from './people';

const stores = {};
stores.userStore = new User(stores);
stores.eventStore = new Events(stores);
stores.peopleStore = new People(stores);
stores.navigationStore = new Navigation(stores);

export default stores;
