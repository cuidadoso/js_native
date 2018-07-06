import { StackNavigator } from 'react-navigation';

import { AuthScreen, EventScreen, EventListScreen } from './screens';

const AppNavigator = StackNavigator({
  auth: {
    screen: AuthScreen
  },
  event: {
    screen: EventScreen
  },
  eventList: {
    screen: EventListScreen
  }
});

export default AppNavigator;
