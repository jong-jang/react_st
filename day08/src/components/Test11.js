import React, { useReducer } from 'react';

const initialState = 0
const reducer = (state, action) => {
  switch(action.type){
    case 'INCREMENT' :
      return state + action.step
    case 'DECREMENT' :
      return state - action.step
    default:
      return state
  }
}

const Test11 = () => {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <h1>숫자 : {count}</h1>
      <p>
        <button onClick={() => dispatch({type:'INCREMENT', step:10})}>10씩 증가</button>
        <button onClick={() => dispatch({type:'INCREMENT', step:50})}>50씩 증가</button>
        <button onClick={() => dispatch({type:'DECREMENT', step:10})}>10씩 감소</button>
        <button onClick={() => dispatch({type:'DECREMENT', step:50})}>50씩 감소</button>
      </p>
    </div>
  );
};

export default Test11;