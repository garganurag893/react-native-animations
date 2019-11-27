import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Welcome from '../screens/Welcome';
import Home from '../screens/Home';

const AppNavigator = ({initialRouteName}) => {
  const Navigator = createAppContainer(
    createStackNavigator(
      {
        welcome: {screen: Welcome},
        home: {screen: Home},
      },
      {
        initialRouteName,
        headerMode: 'none',
      },
    ),
  );
  return <Navigator />;
};
export default AppNavigator;
