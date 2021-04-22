# 박상준 201740212

## **React Native**

<br>

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

# 4월 9일

## Todo 앱 만들기

- ScrollView
  - props
    - `keyboardShouldPersistTaps="always"`
      - 키보드가 열려 있을 경우 이를 닫고 난 후에 onPress 이벤트를 처리하게 한다.
      - 키보드가 열려 있을 때 키보드 밖 화면을 터치해서 이벤트가 발생하는 것을 방지한다.
- submit 버튼 만들어서 event 처리
  - `<touchableHighlight></touchableHighlight>`

# 4월 16일

## Todo 앱 만들기

- 탭 바 만들기
  - todo 목록 전체를 표시해 주거나, 완료되었거나 작업 중인 todo만을 선택적으로 표시해 줍니다.
  - TabBar.js & TabBarItem.js
