import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { inject, observer } from 'mobx-react';

import Event from '../../components/event/Event';

@observer
@inject('eventStore')
class EventScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Event ${navigation.state.params.uid}`
  });

  render() {
    const { eventStore, navigation } = this.props;
    const event = eventStore.entities[navigation.state.params.uid];
    return (
      <View>
        <Text>{event.title}</Text>
        <Event event={event} />
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default EventScreen;
