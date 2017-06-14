import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';

const window = Dimensions.get('window');

const arrMembers = require('../assets/members.json').members;

export default class ScreenMembers extends Component {
  static navigationOptions = {
    title: `Members (${arrMembers.length})`,
  }

  getMembers() {
    return arrMembers;
  }
  renderItem({item, index}) {
    return (
      <View style={styles.member}>
        <Image style={styles.memberAvatar}
          source={{uri: item.avatar}} />
        <View style={styles.memberInfo}>
          <Text style={{fontSize: 16}}>{index+1}. {item.name}</Text>
          <Text style={{color: '#999', fontSize: 12}}>{item.about}</Text>
        </View>
      </View>
    );
  }
  _keyExtractor = (item, index) => index;

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.getMembers()}
          renderItem={this.renderItem}
          keyExtractor={this._keyExtractor}
        />
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
    paddingTop: 10,
    paddingBottom: 10,
  },
  member: {
    borderBottomWidth: 2,
    borderBottomColor: '#EFEFEF',
    paddingBottom: 3,
    marginBottom: 9,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flex: 1,
    width: window.width,
  },
  memberAvatar: {
    width: 60,
    height: 60,
    marginLeft: 10,
    marginRight: 10,
  },
  memberInfo: {
    flex: 1,
  }
});
