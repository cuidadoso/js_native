import React, { Component } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';

import PeopleList from '../../components/people/PeopleList';
import { inject, observer } from 'mobx-react';

@inject('peopleStore')
@observer
class PeopleListScreen extends Component {
  static navigationOptions = {
    title: 'People List'
  };

  handlePersonPress = (uid) => {
    this.props.peopleStore.entities[uid].email = 'Same changed EMAIL';
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
