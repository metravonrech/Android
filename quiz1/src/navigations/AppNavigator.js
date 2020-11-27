import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Welcome from '../screens/Welcome';
import Result from '../screens/Result';
import Question from '../screens/Question';
import Gameover from '../screens/Gameover';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Question"
        component={Question}
        options={{headerShown: false, headerTransparent: true}}
      />
      <Stack.Screen
        name="Result"
        component={Result}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Gameover"
        component={Gameover}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
