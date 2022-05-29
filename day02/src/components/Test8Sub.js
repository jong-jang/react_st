import React from 'react';

const Test8Sub = ( {name, age, addr, color, bgColor, done, tel } ) => {
  // const {name, age, addr, color, bgColor, done, tel } = props
  return (
    <div style={{width:350, margin:20, padding:15,
    border:`4px solid ${color}`, backgroundColor:bgColor}}>
      <h2> {name}의 신상명세서</h2>
      <ul>
        <li>이름 : {name}</li>
        <li>나이 : {age}</li>
        <li>주소 : {addr}</li>
        <li>보더컬러 : {color}</li>
        <li>배경컬러 : {bgColor}</li>
        <li>동의여부 : {done ? '동의' : '비동의'}</li>
        <li>연락처 : {tel}</li>
      </ul>
    </div>
  );
};

export default Test8Sub;