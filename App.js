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

/* 생명주기 componentWillUnmount */
class App extends React.Component {
  constructor() {
    super();
  }

  handleClick() {
    this._timeout = setTimeout(() => {
      this.openWidget();
    }, 2000);
  }
  componentWillUnmount() {
    clearTimeout(this._timeout);
  }
  render() {
    return <SomeComponent handleClick={() => this.handleClick()} />;
  }
}

const styles = StyleSheet.create({
  header: {},
  Text: {
    fontSize: 25,
  },
});

export default App;
