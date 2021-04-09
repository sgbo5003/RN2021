/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import App040204 from './App040204';

/* 생명주기 componentWillUnmount */
class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return <App040204 />;
  }
}

const styles = StyleSheet.create({
  header: {},
  Text: {
    fontSize: 25,
  },
});

export default App;
