import React, { useRef, useState } from 'react';

const Test8 = () => {
  const [userid, setUserid] = useState('')
  const [userpw, setUserpw] = useState('') 
  const idRef = useRef()

  const changeInput1 = (e) => {
    const {value} = e.target
    setUserid(value)
  }
  const changeInput2 = (e) => {
    const {value} = e.target
    setUserpw(value)
  }
  const onReset = () => {
    setUserid('')
    setUserpw('')
    idRef.current.focus();
  }
  
  return (
    <div>
      <input type="text" onChange={changeInput1} value={userid} ref={idRef}/>
      <input type="text" onChange={changeInput2} value={userpw}/>
      <button onClick={onReset}>초기화</button>
      <h3>
        id: {userid}/ pw : {userpw}
      </h3>
    </div>
  );
};

export default Test8;