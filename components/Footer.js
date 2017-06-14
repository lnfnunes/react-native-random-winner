import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';

const window = Dimensions.get('window');

const Footer = () => {
  return (
    <View style={styles.container}>
      <Text>MIT License © Leandro Nunes</Text>
    </View>
  );
}
export default Footer;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: window.width - 40,
    borderColor: '#EFEFEF',
    borderTopWidth: 2,
  },
});
