import React, {PureComponent} from 'react';
import AppNavigator from './src/navigation/AppNavigator';

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      initialRouteName: 'welcome',
    };
    console.disableYellowBox = true;
  }
  render() {
    const {initialRouteName} = this.state;
    return <AppNavigator initialRouteName={initialRouteName} />;
  }
}
