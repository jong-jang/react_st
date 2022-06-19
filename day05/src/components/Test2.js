import React, { useState } from 'react';

const Test2 = () => {
  const [data, setData] = useState([])
  // const [data, setData] = useState([
  //   { id: 1, text: '홍길동' }
  //   { id: 2, text:'홍길동}
  // ])
  const onAdd = () => {
    setData([
      ...data,
      {
        id: data.length, // 안좋은 예시 > 중간에 데이터를 삭제하면 id가 중복됨
        text: '김태리'+Math.floor(Math.random()*10)
      }
    ])
  }
  return (
    <div>
      <h2>데이터추가</h2>
      <button onClick={onAdd}>추가</button>
      <hr />
      <ul>
        {
          data.map(item => <li>{item.id} / {item.text}</li>)
        }
      </ul>
    </div>
  );
};

export default Test2;