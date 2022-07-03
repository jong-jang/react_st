import React, { useState } from 'react';
import Test07Sub from './Test07Sub';

const Test07 = () => {
  const [isShow, setIsShow] = useState(true)

  const onToggle = () => {
    setIsShow(!isShow)
  }
  return (
    <div>
      <p>
        <button onClick={onToggle}>
          {isShow ? '숨기기' : '보이기'}
        </button>
      </p>
      <hr />
      {
        isShow ? <Test07Sub /> : null
      }
    </div>
  );
};

export default Test07;