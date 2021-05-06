/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import DataTest from './DataTest';
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

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '박상준',
      id: 201740212,
    };
  }

  render() {
    const {name, id} = this.state;
    return <DataTest name={name} id={id} />;
  }
}

export default App;
