import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity
} from 'react-native';
import { observer, inject } from 'mobx-react';
import { web } from 'react-native-communications';

import ConfirmModal from '../common/ConfirmModal';
import { eventList } from '../../fixtures';

@observer
@inject('navigationStore')
class Event extends Component {
  state = {
    confirmModal: false
  };

  static defaultProps = {
    event: eventList[0]
  };

  handleDelete = () => {
    this.props.event.title = 'Same new TITLE';
    /*this.setState({
      confirmModal: true
    });*/
  };

  confirmDelete = () => {
    this.setState({ confirmModal: false });
    this.deleteEvent();
  };
  cancelDelete = () => this.setState({ confirmModal: false });
  deleteEvent = () => {};

  goToURL = () => {
    web(this.props.event.url);
  };

  goToMap = () => {
    this.props.navigationStore.goTo('eventMap', { uid: this.props.event.uid });
  };

  render() {
    const { event } = this.props;
    return (
      <View style={styles.container}>
        <Text style={[styles.text, styles.header]}>{event.title}</Text>
        <View>
          <Image
            source={{ uri: 'https://picsum.photos/g/200/100' }}
            style={styles.image}
          />
          <Text>{event.when}</Text>
          <Text>{event.where}</Text>
        </View>
        <TouchableOpacity onPress={this.goToURL}>
          <Text style={styles.text}>{event.url}</Text>
        </TouchableOpacity>
        <View style={styles.button}>
          <Button
            onPress={this.handleDelete}
            title="Delete Event"
            color="#F55"
          />
          <Button onPress={this.goToMap} title="Show on map" />
        </View>
        <ConfirmModal
          visible={this.state.confirmModal}
          onConfirm={this.confirmDelete}
          onCancel={this.cancelDelete}
        >
          Are you sure you want to delete "{event.title}"
        </ConfirmModal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    height: '100%',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  header: {
    backgroundColor: '#f2f2f2',
    shadowColor: '#000',
    shadowOpacity: 0.8,
    shadowOffset: {
      height: 2,
      width: 0
    },
    elevation: 5
  },
  text: {
    width: '100%',
    height: 100,
    marginBottom: 20,
    textAlign: 'center'
  },
  image: {
    width: 200,
    height: 100
  },
  button: {
    width: '100%',
    height: 100,
    marginBottom: 20
  }
});

export default Event;
