import { StackNavigator, createStackNavigator } from 'react-navigation';

import { AuthScreen, EventScreen, EventListScreen } from './screens';

const AppNavigator = createStackNavigator({
  eventList: {
    screen: EventListScreen
  },
  auth: {
    screen: AuthScreen
  },
  event: {
    screen: EventScreen
  }
});

export default AppNavigator;
