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

// 예제 2.1 MyComponent -> App

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      year: 2021,
      leapYear: true,
      name: 'Sang Jun Park',
      topics: ['React', 'React Native', 'JavaScript'],
      info: {
        paperback: true,
        length: '335 pages',
        type: 'programming',
      },
      colors: ['blue'],
    };
  }

  render() {
    let leapyear = <Text style={styles.Text}>This is not a leapyear!</Text>;
    if (this.state.leapYear) {
      leapyear = <Text style={styles.Text}>This is a leapyear!</Text>;
    }
    return (
      <View style={styles.header}>
        <Text style={styles.Text}>My name is: {this.state.name}</Text>
        <Text style={styles.Text}>The Year is: {this.state.year}</Text>
        <Text style={styles.Text}>my colors are: {this.state.colors[0]}</Text>
        <Text style={styles.Text}>Length: {this.state.info.length}</Text>
        <Text style={styles.Text}>Type: {this.state.info.Type}</Text>
        {leapyear}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {},
  Text: {
    fontSize: 25,
  },
});

export default App;
