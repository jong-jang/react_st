import React, { useState } from 'react';

const Test10 = () => {
  const [name, setName] = useState('홍길동')
  const [age, setAge] = useState(20)
  const [color, setColor] = useState('pink')

  const onName1 = () => {
    setName('김태리')
  }
  const onName2 = () => {
    setName('김다미')
  }
  const onName3 = () => {
    setName('최우식')
  }
  
  return (
    <div>
      <h2 style={{backgroundColor:color, padding:10, margin:10}}>이름/{name}, 나이:{age}, 컬러:{color}</h2>
      <p>
        <button onClick={onName1}>김태리</button>
        <button onClick={onName2}>김다미</button>
        <button onClick={onName3}>최우식</button>
      </p>
      <p>
        <button onClick={() => {setColor('hotpink')}}>hotpink</button>
        <button onClick={() => {setColor('tomato')}}>tomato</button>
        <button onClick={() => {setColor('skyblue')}}>skyblue</button>
      </p>
      <p>
        <button onClick={() => {setAge(20)}}>20살</button>
        <button onClick={() => {setAge(15)}}>15살</button>
        <button onClick={() => {setAge(25)}}>25살</button>
      </p>
    </div>
  );
};

export default Test10;

/* 
  Hook은 React 16.8버전

  함수형 컴포넌트는 렌더링 할때마다 내부의 것들을 기억하지 못한다
  다시 생성 초기화 (함수, 변수)

  내부의 것들을 유지하기 위해
  값을 기억하기 위해서 - Hook이 등장했다.

  값을 유동으로 변경해주고 값을 기억 : useState
  const [상태데이터, 상태데이터를변경] = useState(초기값);
  const [변수, 변수를변경해주는함수] = useState(0);

  const [변수, 함수] = useState(0);
  A = 0
  B() => B(100) => A = 100
  const [test, setTest] = useState(0);
  setCount(값)
  setCount(수식)
*/
