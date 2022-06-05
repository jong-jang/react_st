import React, { useState } from 'react';

const Test12 = () => {
  const [isChk, setIsChk] = useState(false)

  const onChk = (e) => {
    const { checked } = e.target
    setIsChk(checked)
  }
  
  return (
    <>
      {/* 체크 선택시 true/false 글자색변경 toamto/skyblue*/}
      <div style={{color:isChk ? 'tomato':'skyblue', margin:30, fontSize:25}}>
        <input type="checkbox" onChange={onChk} checked={isChk}/>
        오늘은 일요일 입니다.
      </div>
    </>
  );
};

export default Test12;