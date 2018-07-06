import React, { Component } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { observer, inject } from 'mobx-react';

import EventList from '../../components/event/EventList';

@inject('eventStore')
@observer
class EventListScreen extends Component {
  static navigationOptions = {
    title: 'Event List'
  };

  handleEventPress = (uid) => {
    console.log('---', this.props);
    this.props.navigation.navigate('event', { uid });
  };

  getLoader() {
    return (
      <View>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  componentDidMount() {
    this.props.eventStore.loadAll();
  }

  render() {
    const { eventStore } = this.props;
    if (eventStore.loading) return this.getLoader();
    return (
      <EventList
        onEventPress={this.handleEventPress}
        events={eventStore.list}
      />
    );
  }
}

const styles = StyleSheet.create({});

export default EventListScreen;
