import { computed, action } from 'mobx';
import groupBy from 'lodash/groupBy';
import firebase from 'firebase';

import EntitiesStore, { subscribeHelper } from './EntitiesStore';
import { decode } from 'base64-arraybuffer';

class People extends EntitiesStore {
  @computed
  get sections() {
    const grouped = groupBy(this.list, (person) => person.firstName.charAt(0));

    return Object.entries(grouped).map(([letter, list]) => ({
      title: `${letter}, ${list.length} people`,
      data: list.map((person) => ({ key: person.uid, person }))
    }));
  }

  @action
  updatePerson(uid, data) {
    //todo add loader on camera, add realtime
    firebase
      .database()
      .ref(`people/${uid}`)
      .update(data);
  }

  @action
  async saveAvatar(uid, base64) {
    const buf = decode(base64);
    const ref = firebase.storage().ref(`/avatars/${uid}.jpg`);
    await ref.put(buf);
    const avatar = await ref.getDownloadURL();
    this.updatePerson(uid, { avatar });
  }

  @action loadAll = subscribeHelper('people');
}

export default People;
