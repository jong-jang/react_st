import React, { useState } from 'react';
import Test03Sub from './Test03Sub';

const Test03 = () => {
  const [isShow, setIsShow] = useState(false)

  const onToggle = () => {
    setIsShow(!isShow)
  }
  return (
    <div>
      <h2>useEffect 형식4</h2>
      <p>
        <button onClick={onToggle}>{isShow ? '숨기기':'보이기'}</button>
      </p>
      <hr />
      {
        isShow && <Test03Sub />
      }
    </div>
  );
};

export default Test03;