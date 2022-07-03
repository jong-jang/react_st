import React, { useState } from 'react';
import Test08Sub from './Test08Sub';

const Test08 = () => {
  const [msg, setMsg] = useState('test')
  const [isShow, setIsShow] = useState(false)
  const onMsg1 = () => {
    const result = window.confirm('전부 복구하시겠습니까?')
    if(result) {
      setMsg('예 전부 복구해 주세요')
      setIsShow(true)
    }else {
      return
    }
  }
  const onMsg2 = () => {}
  
  return (
    <div>
      <p>
        <button onClick={onMsg1}>메세지</button>
        <button onClick={onMsg2}>메세지</button>
      </p>
      <hr />
      <Test08Sub msg={msg} isShow={isShow} setIsShow={setIsShow}/>
    </div>
  );
};

export default Test08;