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

/* 생명주기 componentDidMount */
class App extends React.Component {
  constructor() {
    super();
    this.state = {loading: true, data: {}};
  }
  componentDidMount() {
    //ajax call
    setTimeout(() => {
      this.setState({
        loading: false,
        data: {name: 'Nader Dabit', age: 35},
      });
    }, 2000);
  }
  render() {
    if (this.state.loading) {
      return <Text style={styles.Text}>Loading..</Text>;
    }
    const {name, age} = this.state.data;
    return (
      <View>
        <Text style={styles.Text}>Name : {name}</Text>
        <Text style={styles.Text}>Age : {age}</Text>
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
