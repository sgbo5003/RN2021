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
import Heading from './Heading';
import Input from './Input';
import Button from './Button';

let todoIndex = 0;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      todos: [],
      type: 'All',
    };
    this.submitTodo = this.submitTodo.bind(this);
  }

  inputChange(inputValue) {
    console.log(' Input Value: ', inputValue);
    this.setState({inputValue});
  }

  submitTodo() {
    if (this.state.inputValue.match(/^\s*$/)) {
      return; //비어있으면 아무것도 반환 x
    }
    const todo = {
      // 비어있지 않으면 todo 변수를 생성해서 다음의 객체를 할당
      title: this.state.inputValue,
      todoIndex,
      complete: false,
    };
    todoIndex++; // index를 증가
    const todos = [...this.state.todos, todo]; //새로운 todo를 기존 배열에 추가
    this.setState({todos, inputValue: ''}, () => {
      console.log('State: ', this.state);
    });
  }
  render() {
    let {inputValue} = this.state;
    return (
      <View style={styles.container}>
        <ScrollView
          keyboardShouldPersistTaps="always" // -> 키보드가 열려 있을 경우 이를 닫고 난 후에 onPress 이벤트를 처리하게 한다.
          style={styles.content}>
          <Heading />
          <Input
            inputValue={inputValue}
            inputChange={text => this.inputChange(text)}
          />
          <Button submitTodo={this.submitTodo} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    paddingTop: 60,
  },
});

export default App;
