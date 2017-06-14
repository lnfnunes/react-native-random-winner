import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

export default class Content extends Component {
  handleWinner = () => {
    console.warn(Math.random());
  }

  render() {
    return (
      <View style={styles.content}>
        <Text style={styles.title}>
          Meetup Front-end
        </Text>
        <Text style={styles.subtitle}>
          Random winner
        </Text>
        <Button style={styles.button}
          title="> Pick a Winner <"
          onPress={this.handleWinner}>
        </Button>
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
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 32,
    textAlign: 'center',
    marginBottom: 40,
  },
  button: {
    fontSize: 24,
  },
});
