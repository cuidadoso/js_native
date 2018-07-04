import React, { Component } from 'react';
import { View } from 'react-native';

import SignIn from './auth/SignIn';
import Hello from './Hello';
import Event from './event/Event';

class Root extends Component {
  render() {
    return (
      <View>
        <Event />
      </View>
    );
  }
}

export default Root;
