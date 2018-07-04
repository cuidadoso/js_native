import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import { eventList } from '../../fixtures';

class Event extends Component {
  static defaultProps = {
    event: eventList[0]
  };

  render() {
    const { event } = this.props;
    return (
      <View style={style.container}>
        <Text style={[style.text, style.header]}>{event.title}</Text>
        <View>
          <Image
            source={{ uri: 'https://picsum.photos/g/200/100' }}
            style={style.image}
          />
          <Text>{event.when}</Text>
          <Text>{event.where}</Text>
        </View>
        <Text style={style.text}>{event.url}</Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
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
  }
});

export default Event;