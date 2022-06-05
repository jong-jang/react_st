import React, { useRef } from 'react';

const Test9 = () => {
  const idRef = useRef(null)
  const pwRef = useRef()

  const onShow = () => {
    const data = {
      id:idRef.current.value,
      pw:pwRef.current.value
    }
    console.log(data)
  }

  return (
    <div>
      {/* ref 수업용 : 좋은예는 아니다. */}
      <input type="text" ref={idRef}/>
      <input type="text" ref={pwRef}/>
      <button onClick={onShow}>확인</button>
    </div>
  );
};

export default Test9;

/* useRef

직접 DOM 요소에 접근해야 할 때, useRef 훅을 사용하여 DOM 요소에 직접 접근이 가능

useRef 훅이 반환하는 ref 객체를 이용해서 자식 요소에 접근이 가능

​

공식문서 내용

useRef는 .current 프로퍼티로 전달된 인자(initialValue)로 초기화된 변경 가능한 ref 객체를 반환합니다

useRef는 .current 프로퍼티에 변경 가능한 값을 담고 있는 “상자”와 같습니다.

const 이름 = useRef(null)
const 이름 = useRef()
const 이름 = useRef(초기값) - 유지값
const 이름 = useRef(5) - 유지값

<태그  ref = {이름} />

이름.current.style.color = xx
이름.current.style.fontSize = xx

useRef는 참조를 목적으로 사용되지만
컴포넌트 렌더링에 영향을 주지 않는것을 목적으로 한다.
함수 컴포넌트 내부 특정값을 지속적으로 참조할때 사용한다.


Ref를 사용해야 할 때
Ref의 바람직한 사용 사례는 다음과 같습니다.

포커스, 텍스트 선택영역, 혹은 미디어의 재생을 관리할 때.
애니메이션을 직접적으로 실행시킬 때.
서드 파티 DOM 라이브러리를 React와 같이 사용할 때.
선언적으로 해결될 수 있는 문제에서는 ref 사용을 지양하세요.

예를 들어, Dialog 컴포넌트에서 open()과 close() 메서드를 두는 대신, isOpen이라는 prop을 넘겨주세요.

Ref를 남용하지 마세요
ref는 애플리케이션에 “어떤 일이 일어나게” 할 때 사용될 수도 있습니다. 그럴 때는 잠시 멈추고 어느 컴포넌트 계층에서 상태를 소유해야 하는지 신중하게 생각해보세요. 대부분의 경우, 상태를 소유해야 하는 적절한 장소가 더 높은 계층이라는 결론이 날 겁니다. 상태를 상위 계층으로 올리는 것에 대한 예시는 상태 끌어올리기 가이드에서 확인하실 수 있으십니다.

*/