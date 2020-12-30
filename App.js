/**
 * Restaurant Supply React Native App
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import { 
  NavigationContainer, 
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import RootStackScreen from './app/screens/RootStackNavigator/RootStackScreen';
import * as Animatable from 'react-native-animatable';
import configureStore from './app/redux/config/store/index';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (   
          <NavigationContainer>
            <RootStackScreen isLoggedIn={this.state.isLoggedIn} isOnBoardingCompleted={this.state.isOnBoardingCompleted} toggleTheme={this.toggleTheme}/>
          </NavigationContainer>
    );
  }
}

export default App;
