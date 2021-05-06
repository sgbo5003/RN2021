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

export default function DataTest(props) {
  const foo = [1, 2, 3, 4, 5];
  const fooList = foo.map(number => (
    <View>
      <Text>{number}</Text>
    </View>
  ));
  return (
    <View>
      <Text>학번:{props.id}</Text>
      <Text>이름:{props.name}</Text>
      {fooList}
    </View>
  );
}

const styles = StyleSheet.create({
  fooList: {},
});
