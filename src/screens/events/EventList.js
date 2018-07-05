import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import EventList from '../../components/event/EventList';

class EventListScreen extends Component {
  static navigationOptions = {
    title: 'Event List'
  };

  handleEventPress = (uid) => {
    console.log('---', this.props);
    this.props.navigation.navigate('event', { uid });
  };

  render() {
    return <EventList onEventPress={this.handleEventPress} />;
  }
}

const styles = StyleSheet.create({});

export default EventListScreen;
