import { action } from 'mobx';

import EntitiesStore, { subscribeHelper } from './EntitiesStore';

class Events extends EntitiesStore {
  @action loadAll = subscribeHelper('events');
}

export default Events;
