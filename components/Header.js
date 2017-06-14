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
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 180,
    width: window.width,
    marginTop: 60,
  },
});
