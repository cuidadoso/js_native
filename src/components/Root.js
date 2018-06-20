import React, { Component } from 'react';
import { View } from 'react-native';

import SignIn from './auth/SignIn';
import Hello from './Hello';

class Root extends Component {
  render() {
    return (
      <View>
        <SignIn />
        <Hello />
      </View>
    );
  }
}

export default Root;
