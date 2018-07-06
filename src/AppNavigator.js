import { StackNavigator, createStackNavigator } from 'react-navigation';

import { AuthScreen, EventScreen, EventListScreen } from './screens';

const AppNavigator = createStackNavigator({
  auth: {
    screen: AuthScreen
  },
  eventList: {
    screen: EventListScreen
  },
  event: {
    screen: EventScreen
  }
});

export default AppNavigator;
