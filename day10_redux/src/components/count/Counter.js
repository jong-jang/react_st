import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset } from '../../store/modules/counter';

const Counter = () => {
  const num = useSelector( state => state.count.num )
  const dispatch = useDispatch();
  return (
    <div>
      <h1>카운트 : {num} </h1>
      <p>
        <button onClick={() => dispatch(increment())}>증가</button>
        <button onClick={() => dispatch(decrement())}>감소</button>
        <button onClick={() => dispatch(reset())}>초기화</button>
      </p>
    </div>
  );
};

export default Counter;