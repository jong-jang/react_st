import React from 'react';

const Test1 = () => {
  return (
    <>
      <h1> JSX 영역 : JavaScript를 확장한 문법</h1>
      {/* 컴포넌트명은 반드시 첫글자가 대문자 이어야한다 */}
      <h2>한줄 이상은 div, section, article, tr ,td ,ul...</h2>
      <h2>빈태그 반드시 맨뒤에 /</h2>
      <img />
      <input />
      <hr />
      <br />
      {/* {주석, 설명} */}
      <div
        // 한줄주석
        /* 
          여러줄 주석
        */
      >
        입력내용
      </div>
    </>
  );
};

export default Test1;