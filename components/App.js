import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { StackNavigator, } from 'react-navigation';

import ScreenHome from './ScreenHome'
import ScreenMembers from './ScreenMembers'

const App = StackNavigator({
  Home: { screen: ScreenHome },
  Members: { screen: ScreenMembers },
});

export default App;