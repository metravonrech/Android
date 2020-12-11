/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';
import AppNavigator from './src/navigations/AppNavigator';
import store from './src/resourses/store'
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <AppNavigator/>
    </Provider>
  );
}
// const App = () => <AppNavigator />;

export default App;
