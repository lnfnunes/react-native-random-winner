import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

const Content = (props) => {
  return (
    <View style={styles.content}>
      <Text style={styles.title}>
        Random winner
      </Text>
      <Button style={styles.button}
        title="> Pick a Winner <"
        onPress={props.onHandleWinner}>
      </Button>
    </View>
  );
}
export default Content;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
    marginBottom: 40,
  },
  button: {
    fontSize: 24,
  },
});
