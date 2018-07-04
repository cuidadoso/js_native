import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import EventCard from './EventCard';
import { eventList } from '../../fixtures';

class EventList extends Component {
  static = {};

  static defaultProps = {
    events: eventList
  };

  render() {
    return (
      <ScrollView>
        <View>
          {this.props.events.map((event) => (
            <EventCard key={event.uid} event={event} />
          ))}
        </View>
      </ScrollView>
    );
  }
}

export default EventList;
