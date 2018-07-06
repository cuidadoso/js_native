import { observable, action, computed } from 'mobx';
import { NavigationActions } from 'react-navigation';

import AppNavigator from '../AppNavigator';
import BasicStore from './BasicStore';

class Navigation extends BasicStore {
  @observable
  state = AppNavigator.router.getStateForAction(
    AppNavigator.router.getActionForPathAndParams('auth')
  );

  @action
  dispatch = (action) => {
    this.state = AppNavigator.router.getStateForAction(action, this.state);
  };

  @computed
  get config() {
    return {
      dispatch: this.dispatch,
      state: { ...this.state },
      addListener: () => {}
    };
  }

  @action
  reset(routeName) {
    const action = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName })]
    });

    this.dispatch(action);
  }
}

export default Navigation;
