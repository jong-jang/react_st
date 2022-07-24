import React, { useReducer } from 'react';

//초기값
const initialState = 'tomato'
// 함수
const reducer = (state, action) => {
  switch(action.type){
    case 'RED':
      return 'red'
    case 'GREEN':
      return 'green'
    case 'BLUE':
      return 'blue'
    case 'HOTPINK':
      return 'hotpink'
    default:
      return state
  }
}

const Test10 = () => {
  const [color, dispatch] = useReducer(reducer, initialState)
  
  return (
    <div>
      <h1 style={{color:color}}>컬러 : {color}</h1>
      <p>
        <button onClick={() => dispatch({type:'RED'})}>red</button>
        <button onClick={() => dispatch({type:'GREEN'})}>greed</button>
        <button onClick={() => dispatch({type:'BLUE'})}>blue</button>
        <button onClick={() => dispatch({type:'HOTPINK'})}>hotpink</button>
      </p>
    </div>
  );
};

export default Test10;