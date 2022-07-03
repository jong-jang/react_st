import React, { useEffect, useState } from 'react';

const Test06 = () => {
  const [count, setCount] = useState(1)
  const [isActive, setIsActive] = useState(false)

  const onToggle = () => {
    setIsActive(!isActive)
  }
  const onReset = () => {
    setIsActive(false);
    setCount(1)
  }

  useEffect(() => {
    console.log('useEffect')
    let timer = null
    if(isActive){
      timer = setInterval(() => {
        setCount(count => count + 1)
      }, 1000)
    }else{
      clearInterval(timer)
    }

    return()=>{
      console.log('뒷정리')
      clearInterval(timer)
    }
  }, [isActive])

  return (
    <div>
      <h1>카운트 : {count}</h1>
      <p>
        <button onClick={onToggle}>{isActive ? '중지' : '시작'}</button>
        <button onClick={onReset}>초기화 중지</button>
      </p>
    </div>
  );
};

export default Test06;