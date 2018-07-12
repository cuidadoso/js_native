import { observable, action, computed, toJS, autorun } from 'mobx';
import { NavigationActions } from 'react-navigation';

import AppNavigator from '../AppNavigator';
import BasicStore from './BasicStore';

class Navigation extends BasicStore {
  constructor(...args) {
    super(...args);
    autorun(() => {
      const userStore = this.getStore('userStore');
      const routeName = userStore.user ? 'lists' : 'auth';
      this.reset(routeName);
    });
  }

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
      state: {
        ...this.state,
        routes: toJS(this.state.routes)
      },
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

  @action
  goTo(routeName, params) {
    this.dispatch(NavigationActions.navigate({ routeName, params }));
  }
}

export default Navigation;
