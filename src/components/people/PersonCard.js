import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Card from '../common/Card';
import { observer } from 'mobx-react';

@observer
class PersonCard extends Component {
  static propTypes = {};

  render() {
    const { email, firstName, lastName, avatar } = this.props.person;
    return (
      <Card style={styles.container}>
        <Image
          source={{ uri: avatar || 'https://picsum.photos/g/100/50' }}
          style={styles.avatar}
        />
        <View style={styles.content}>
          <Text style={styles.email}>{email}</Text>
          <Text>
            {firstName} {lastName}
          </Text>
        </View>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  avatar: {
    width: 100,
    height: 50,
    margin: 5
  },
  content: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  email: {
    fontWeight: 'bold'
  }
});

export default PersonCard;
