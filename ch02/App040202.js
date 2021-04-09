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

/* 구조 분해 할당 */
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      book: 'React Native in Action',
    };
  }
  updateBook() {
    this.setState({
      book: 'Express in Action',
    });
  }

  render() {
    const {book} = this.state;
    return <BookDisplay updateBook={() => this.updateBook()} book={book} />;
  }
}

class BookDisplay extends React.Component {
  render() {
    const {book, updateBook} = this.props;
    return (
      <View>
        <Text style={styles.Text} onPress={updateBook}>
          {book}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {},
  Text: {
    fontSize: 30,
  },
});

export default App;
