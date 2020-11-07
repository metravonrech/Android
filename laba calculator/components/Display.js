import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Display = ({text}) => (
  <View style={styles.container}>
    <Text style={styles.text}>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 3,
    width: '90%',
    backgroundColor: '#000',
    justifyContent: 'flex-end',
    padding: 10
  },
  text: {
    color: '#fff',
    fontSize: 40,
    textAlign: 'right'
  }
});

export default Display;
