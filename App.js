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

/* 생명주기 */
export default class App extends React.Component {
  state = {
    userLoggedIn: false,
  };
  static getDerivedStateFromProps(nextProps, nextState) {
    if (nextProps.authenticated) {
      return {
        userLoggedIn: true,
      };
    }
    return null;
  }
  render() {
    return (
      <View style={styles.container}>
        {this.state.userLoggedIn && <AuthenticatedComponent />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
  },
});
