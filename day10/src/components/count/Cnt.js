import React from 'react';
import { useCnt } from '../../contexts/CntContext';

const Cnt = () => {
  const {userStore, userDispatch} = useCnt()
  return (
    <div>
      <h1>카운터 : {userStore.count}</h1>
      <h1>{`토글 : xxx `}</h1>
      <p>
        <button onClick={() => userDispatch({type:'INCREMENT'})}>증가</button>
        <button onClick={() => userDispatch({type:'DECREMENT'})}>감소</button>
        <button onClick={() => userDispatch({type:'RESET'})}>초기화</button>
      </p>
    </div>
  );
};

export default Cnt;