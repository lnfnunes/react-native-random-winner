import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  View,
  Dimensions,
} from 'react-native';

const window = Dimensions.get('window');

const Header = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} />
    </View>
  );
}
export default Header;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 160,
    width: window.width,
    marginTop: 60,
  },
});
