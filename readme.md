# 박상준 201740212

## **React Native**

<br>

# **03월 26일**

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
