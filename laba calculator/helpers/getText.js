import React from 'react';
import { View, Text } from 'react-native';
import HTML from "react-native-render-html";

const getText = (text, classname) => {
  switch (text) {
    case 'square2':
      return (
        <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
          <Text style={{fontSize: 20, lineHeight: 30}}>x</Text>
          <Text style={{fontSize: 15, lineHeight: 18}}>2</Text>
        </View>
      );
    case 'squaren':
      return (
        <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
          <Text style={{fontSize: 20, lineHeight: 30}}>x</Text>
          <Text style={{fontSize: 15, lineHeight: 18}}>n</Text>
        </View>
      );
    case 'root':
      return (
        <HTML html={"&radic;<span style=\"text-decoration: overline\">x</span>"} />
      )
    case 'PI':
      return (
          <HTML html={"&#x03C0"} />
        )
    default: return (<Text className={classname}>{text}</Text>)
  }
}

export default getText;