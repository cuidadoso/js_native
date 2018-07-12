import { StackNavigator, TabNavigator } from 'react-navigation';

import {
  AuthScreen,
  EventScreen,
  EventListScreen,
  PeopleListScreen,
  EventMapScreen
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
  },
  eventMap: {
    screen: EventMapScreen
  }
});

export default AppNavigator;
