import React from 'react';
import { View, StyleSheet } from 'react-native';

const ButtonRow = ({ children }) => {
  return (
    <View style={styles.buttonRow}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  buttonRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default ButtonRow;