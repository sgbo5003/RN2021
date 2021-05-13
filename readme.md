# 박상준 201740212

## **React Native**

<br>

# 5월 7일

## 중간고사 리뷰

중간고사 내용 리뷰

## 구조 분해 할당

- 구조 분해 할당

  - 배열이나 객체의 속성을 해체하여, 그 값을 개별 변수에 담을 수 있게 하는 JavaScript 표현식
  - 기본 변수 할당

    ```jsx
    var foo = ['one', 'two', 'three'];

    var [one, two, three] = foo;
    console.log(one); // "one"
    console.log(two); // "two"
    console.log(three); // "three"
    ```

  - 함수가 반환한 배열 분석

    ```jsx
    function f() {
      return [1, 2];
    }

    var a, b;
    [a, b] = f();
    console.log(a); // 1
    console.log(b); // 2
    ```

  - 객체 구조 분해

    ```jsx
    var o = {p: 42, q: true};
    var {p, q} = o;

    console.log(p); // 42
    console.log(q); // true
    ```

  - 새로운 변수 이름으로 할당하기

    ```jsx
    var o = {p: 42, q: true};
    var {p: foo, q: bar} = o;

    console.log(foo); // 42
    console.log(bar); // true
    ```

# 4월 30일

## 스타일 구성하기

- 스타일 구성하는 방법

  - 컴포넌트 내에 스타일시트 선언하기

    ```jsx
    import {StyleSheet} from 'react-native';

    const styles = StyleSheet.create({
      container: {
        marginTop: 150,
        backgroundColor: '#ededed',
        flexWrap: 'wrap',
      },
    });

    const buttons = StyleSheet.create({
      primary: {
        flex: 1,
        height: 70,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20,
        marginRight: 20,
      },
    });

    export {styles, buttons};
    ```

  - 컴포넌트 파일과는 별도의 스타일 시트 선언하기

    ```jsx
    import getStyleSheet from './styles';
    ```

- binding의 이해

  - 객체의 외부에서 사용할 때 binding을 해서 사용해야 한다.
  - React에서는 constructor에서 binding을 하는 것이 일반적이다.

  ```jsx
  let foo = {
    prop: 'Hello',
    bar: function () {
      console.log(this.prop);
    },
  };

  foo.bar(); //"Hello"

  let fooBar = foo.bar.bind(foo);
  fooBar();
  ```

- 밝은색과 어두운색 테마를 토글하는 앱 만들기

  - 밝은색 테마

    <img src="https://user-images.githubusercontent.com/61876422/117280265-63a83a80-ae9d-11eb-8b1a-91431031930e.PNG" width="300" height="500">

  - 어두운색 테마

    <img src="https://user-images.githubusercontent.com/61876422/117280769-e5986380-ae9d-11eb-8cc9-12e3cc89623e.PNG"
    width="300" height="500">

# 4월 23일

## 중간고사

- props 활용해서 뿌려주기 test

# 4월 16일

## Todo 앱 만들기

- 탭 바 만들기
  - todo 목록 전체를 표시해 주거나, 완료되었거나 작업 중인 todo만을 선택적으로 표시해 줍니다.
  - TabBar.js & TabBarItem.js

# 4월 9일

## Todo 앱 만들기

- ScrollView
  - props
    - `keyboardShouldPersistTaps="always"`
      - 키보드가 열려 있을 경우 이를 닫고 난 후에 onPress 이벤트를 처리하게 한다.
      - 키보드가 열려 있을 때 키보드 밖 화면을 터치해서 이벤트가 발생하는 것을 방지한다.
- submit 버튼 만들어서 event 처리
  - `<touchableHighlight></touchableHighlight>`

# 4월 2일

~p.78

- 코드 작성 시 주의 해야 할 점
  - 소프트웨어 개발의 원칙
    - SOLID, DRY, KISS ,YAGNI
      - DRY 원칙
        - Don't Repeat Yourself (반복하지 마라)
- 구조 분해 할당
  - 자바스크립트의 새로운 특징으로 ES2015 스펙에 추가
  - 객체에서 속성들을 가져와서 변수로 사용하는 것
  - 장점
    - 코드가 간결해진다.
    - 이해하기 쉬워진다.
- react life cycle
  - 마운팅
    - 생성자
    - getDerivedStateFromProps
    - render
    - componentDidMount
      - 컴포넌트가 로딩되고 나서 바로 한 번만 호출된다
      - ajax 호출로 가져온 데이터를 처리
      - 지정된 실행 후에 실행되는 setTimeout을 처리
      - 다른 자바스크립트 프레임워크들과 통합
  - 갱신
    - shouldComponentUpdate
      - Boolean을 반환하며, 컴포넌트의 랜더링 할 것인지를 결정
  - 언마운팅
    - componentWillUnmount
      - 앱에서 컴포넌트가 파기되기 전에 호출
      - 설정된 값을 정리, 리스너를 삭제, 타이머를 제거 하도록 지정

# 03월 26일

책 2장(p.65~)

## <props 와 state>

**state** 는 변경가능

**props**는 변경 불가능

## <빨간 줄 뜨는 이유 해결 방법>

```
import type {Node} from 'react'; // 이 코드에 빨간 줄이 떴었다.
```

settings > javascript validate 여기에 들어간 후

체크 해제 -> 빨간 줄 없어짐

## <onPress 함수>

**onPress** : 이벤트 처리 함수

```
onPress={() => this.updateYear()}
```

## <오늘 알게 된 점>

state는 생성자로 지정하는게 좋다.(거의 권장 이상으로 그냥 필수)

<구조>

```
ex )
class App extends React.Component {
    constructor(){
        super()
        this.state = {

        }
    }
  render() {
      return(

      )
  }
}
```
