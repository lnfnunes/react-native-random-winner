import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Button,
} from 'react-native';

import Header from './Header'
import Content from './Content'
import Footer from './Footer'

const arrMembers = require('../assets/members.json').members;

export default class ScreenHome extends Component {
  static navigationOptions = ({navigation}) => ({
    headerRight: (
      <Button title='members'
        onPress={() => navigation.navigate('Members') }/>
    ),
  })

  onHandleMembers = () => {
    const { navigate } = this.props.navigation;
    navigate('Members')
  }
  onHandleWinner = () => {
    const { navigate } = this.props.navigation;
    navigate('Winner', {winner: Math.floor(Math.random() * arrMembers.length)})
  }

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Content {...this.props}
          onHandleMembers={this.onHandleMembers}
          onHandleWinner={this.onHandleWinner} />
        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});
