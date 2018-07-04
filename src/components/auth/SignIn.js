import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Platform
} from 'react-native';

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  };

  setEmail = (email) =>
    this.setState({
      email
    });

  setPassword = (password) =>
    this.setState({
      password
    });

  signIn = () => {
    console.log('---', 'sign in');
  };

  render() {
    const { email, password } = this.state;
    return (
      <View>
        <Text style={styles.header}>Please SIgn In</Text>
        <Text>Email:</Text>
        <TextInput
          value={email}
          onChangeText={this.setEmail}
          style={styles.input}
          keyboardType="email-address"
        />
        <Text>Password:</Text>
        <TextInput
          value={password}
          onChangeText={this.setPassword}
          style={styles.input}
          secureTextEntry
        />
        <TouchableOpacity onPress={this.signIn}>
          <Text>Sign In</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = {
  header: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  input: {
    ...Platform.select({
      ios: {
        borderBottomColor: '#000',
        borderBottomWidth: 1
      },
      android: {}
    })
  }
};
export default SignIn;
