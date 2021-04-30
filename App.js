import React from 'react';
import {View} from  'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import fb from './fb';
import insta from './insta';

export default class App extends React.Component{
  render(){
    return(
      <View>
        <AppContainer/>
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  FaceBook: {screen: fb},
  Instagram: {screen: insta},
});

const AppContainer =  createAppContainer(TabNavigator);
