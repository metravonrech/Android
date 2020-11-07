import React, { Component } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';

import Home from './screens/Home';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={'black'} barStyle={'light-content'}/>
        <Home />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'stretch',
  }
});
