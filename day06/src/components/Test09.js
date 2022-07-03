import React, { useEffect, useState } from 'react';

const Test09 = () => {
  const [count, setCount] = useState(
    ()=> JSON.parse(localStorage.getItem('count')) || 0
  )

  // useEffect(() => {
  //   const count = JSON.parse(localStorage.getItem('count'))
  //   if(count){
  //     setCount(count)
  //   }
  // }, [])
  
  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count))
  }, [count])

  const increment = () => {
    setCount(count + 1)
  }
  const decrement = () => {
    setCount(count - 1)
  }
  const onDel = () => {
    localStorage.removeItem('count')
  }
  return (
    <div>
      <h1>카운트 : {count}</h1>
      <p>
        <button onClick={increment}>증가</button>
        <button onClick={decrement}>감소</button>
        <button onClick={onDel}>삭제</button>
      </p>
    </div>
  );
};

export default Test09;

// 로컬스토리지안에 값을 저장을 해놓고 getItem을 해야함 아니면 스토리지안에 값이 없기 때문에 getItem이 불가능 그래서 useEffect 처리가 필요함
