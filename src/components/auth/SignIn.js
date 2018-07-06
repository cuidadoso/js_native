import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Platform
} from 'react-native';
import { observer, inject } from 'mobx-react';
import { NavigationActions } from 'react-navigation';
import firebase from 'firebase';

@inject('userStore')
@observer
class SignIn extends Component {
  setEmail = (email) => (this.props.userStore.email = email);

  setPassword = (password) => (this.props.userStore.password = password);

  signIn = () => {
    const { userStore } = this.props;
    firebase
      .auth()
      .signInWithEmailAndPassword(userStore.email, userStore.password)
      .then((user) => {
        userStore.user = user;
        const action = NavigationActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: 'eventList' })]
        });
        this.props.navigationStore.dispatch(action);
      });
    console.log('---', 'sign in');
  };

  render() {
    const { userStore } = this.props;
    return (
      <View>
        <Text style={styles.header}>Please Sign In</Text>
        <Text>Email:</Text>
        <TextInput
          value={userStore.email}
          onChangeText={this.setEmail}
          style={styles.input}
          keyboardType="email-address"
        />
        <Text>Password:</Text>
        <TextInput
          value={userStore.password}
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
