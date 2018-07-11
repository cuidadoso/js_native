import { StackNavigator, TabNavigator } from 'react-navigation';

import {
  AuthScreen,
  EventScreen,
  EventListScreen,
  PeopleListScreen
} from './screens';

const ListsNavigator = TabNavigator({
  events: {
    screen: EventListScreen
  },
  people: {
    screen: PeopleListScreen
  }
});

const AppNavigator = StackNavigator({
  auth: {
    screen: AuthScreen
  },
  event: {
    screen: EventScreen
  },
  lists: {
    screen: ListsNavigator
  }
});

export default AppNavigator;
