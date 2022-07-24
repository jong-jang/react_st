import React, { useReducer } from 'react';

const initialState = {
  width:100
}
const reducer = (state,action) => {
  switch(action.type){
    case 'PLUS':
      return {width : state.width + action.step}
    case 'MINUS':
      return {width : state.width - action.step}
    case 'RESET':
      return {width:100}
    default:
      return state
  }
}

const Test13 = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  
  return (
    <div style={{margin:10}}>
      <div style={{width:state.width, height:100, background:'hotpink', transition:'1s'}}></div>
      <p>
        {/* PLUS, MINUS, RESET */}
        <button onClick={() => dispatch({type:'PLUS', step:50})}>50씩 증가</button>
        <button onClick={() => dispatch({type:'PLUS', step:100})}>100씩 증가</button>
        <button onClick={() => dispatch({type:'MINUS', step:50})}>50씩 감소</button>
        <button onClick={() => dispatch({type:'MINUS', step:100})}>100씩 감소</button>
        <button onClick={() => dispatch({type:'RESET'})}>초기화</button>
      </p>
    </div>
  );
};

export default Test13;