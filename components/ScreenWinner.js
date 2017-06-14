import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';

const arrMembers = require('../assets/members.json').members;

export default class ScreenWinner extends Component {
  state = {
    objWinner: {
      name: '...'
    }
  }

  static navigationOptions = ({navigation}) => ({
    title: `Winner`,
  })

  componentDidMount() {
    const {winner} = this.props.navigation.state.params;
    this.setState({
      objWinner: arrMembers[winner]
    })
  }

  render() {
    const { name, avatar } = this.state.objWinner;

    return (
      <View style={styles.container}>
        <Image style={styles.memberAvatar}
          source={{uri: avatar}} />
        <Text style={styles.memberName}>{name}</Text>
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
  memberAvatar: {
    width: 180,
    height: 180,
    marginBottom: 10,
    borderRadius: 10,
  },
  memberName: {
    fontSize: 42,
    textAlign: 'center',
    marginLeft: 10,
    marginRight: 10,
  }
});
