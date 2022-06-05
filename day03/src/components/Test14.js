import React, { useState } from 'react';

const Test14 = () => {
  const [disable, setdisable] = useState(true)
  
  const userPw = (e) => {
    const {length} = e.target.value
    
    setdisable(length>5 ? false : true)
  }
  return (
    <div>
      {/* 예제 */}
      <input type="text" name="username"/>
      <input type="password" name="password" onChange={userPw}/>
      <button disabled={disable}>submit</button>
    </div>
  );
};

export default Test14;