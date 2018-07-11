import React, { Component } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { text, email } from 'react-native-communications';

import PeopleList from '../../components/people/PeopleList';
import { inject, observer } from 'mobx-react';

@inject('peopleStore')
@observer
class PeopleListScreen extends Component {
  static navigationOptions = {
    title: 'People List'
  };

  handlePersonPress = (uid) => {
    /*email(
      'alexander_s@front.ru',
      null,
      null,
      'subject',
      this.props.peopleStore.entities[uid].email
    );*/
    text('+123456789', 'event notification');
  };

  getLoader() {
    return (
      <View>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  componentDidMount() {
    const { peopleStore } = this.props;
    if (!peopleStore.loaded && !peopleStore.loading) peopleStore.loadAll();
  }

  render() {
    const { peopleStore } = this.props;
    if (peopleStore.loading) return this.getLoader();
    return (
      <PeopleList
        onPersonPress={this.handlePersonPress}
        events={peopleStore.list}
      />
    );
  }
}

const styles = StyleSheet.create({});

export default PeopleListScreen;
