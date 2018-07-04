import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';

import SignIn from './auth/SignIn';
import Hello from './Hello';
import Event from './event/Event';
import EventList from './event/EventList';

class Root extends Component {
  render() {
    return (
      <View>
        <Image
          style={styles.image}
          source={require('../../assets/images/logo.png')}
          resizeMode={Image.resizeMode.contain}
        />
        <EventList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 40,
    marginTop: 15
  }
});

export default Root;
