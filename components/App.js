import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import Header from './Header'
import Content from './Content'
import Footer from './Footer'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Content />
        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
});
