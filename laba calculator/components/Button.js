import React from 'react';
import {
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native';
import getText from '../helpers/getText'

const screen = Dimensions.get('window');
const buttonWidth = screen.width / 4;

const Button = ({text, onPress, backgroundColor, color, wide}) => {
  const containerStyles = [styles.container];
  const textStyles = [styles.text];

  if (backgroundColor){
    containerStyles.push({backgroundColor});
  }

  if (color){
    textStyles.push({color});
  }

  if (wide){
    containerStyles.push(styles.wideButton);
  }

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={containerStyles}>
        {getText(text, styles.text)}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: Math.floor(buttonWidth - 10),
    height: Math.floor(buttonWidth - 10),
    borderRadius: buttonWidth,
    margin: 5,
    backgroundColor: '#222'
  },
  text: {
    fontSize: 32
  },
  wideButton: {
    flex: 2,
    width: Math.floor(buttonWidth * 2 - 10),
    alignItems: 'center',
  }
});

export default Button;
