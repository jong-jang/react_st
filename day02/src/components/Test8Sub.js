import React from 'react';
import PropTypes from 'prop-types';

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

Test8Sub.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  addr: PropTypes.string,
  tel: PropTypes.string,
  done: PropTypes.bool,
  color: PropTypes.string,
  bgColor: PropTypes.string
};

Test8Sub.defaultProps = {
  name: '아무개',
  age: 20,
  addr: '서울',
  tel:'000-0000-0000',
  done: false,
  color: 'green',
  bgColor: 'pink'
};

/* 
해당컴포넌트.propTypes = {
  props명: PropTypes.타입
}; 


초기 Prop 값
defaultProps 프로퍼티를 할당함으로써 props의 초깃값을 정의할 수 있습니다.

해당컴포넌트.defaultProps = {
  props명: '초기값'
};

*/
export default Test8Sub;