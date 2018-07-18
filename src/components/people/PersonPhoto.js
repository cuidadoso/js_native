import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Modal,
  ActivityIndicator,
  Image
} from 'react-native';
import Photo from '../common/Photo';
import { observer, inject } from 'mobx-react';
import { observable } from 'mobx';

@inject('peopleStore')
@inject('navigationStore')
@observer
class PersonPhoto extends Component {
  static propTypes = {};

  @observable uri = null;

  getPreview() {
    return (
      <View style={styles.container}>
        <Image style={styles.preview} source={{ uri: this.uri }} />
        <Modal transparent key="loader">
          <View style={styles.modal}>
            <ActivityIndicator size="large" />
          </View>
        </Modal>
      </View>
    );
  }

  async getPhoto({ base64, uri }) {
    const { uid, peopleStore, navigationStore } = this.props;
    this.uri = uri;
    await peopleStore.saveAvatar(uid, base64);
    navigationStore.goBack();
  }

  render() {
    if (this.uri) return this.getPreview();
    return <Photo base64 getPhoto={this.getPhoto.bind(this)} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  preview: {
    width: '100%',
    height: '100%'
  },
  modal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.2)'
  }
});

export default PersonPhoto;
