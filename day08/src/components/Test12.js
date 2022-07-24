import React, { useReducer } from 'react';

const initialState = {
  color:'hotpink'
}
const reducer = (state, action) => {
  switch(action.type) {
    case 'CHANGE_COLOR':
      return {color : action.step}
    default:
      return state
  }
}

const Test12 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1 style={{color:state.color}}>컬러 : {state.color}</h1>
      <p>
        {/* change color */}
        <button onClick={() => dispatch({type:'CHANGE_COLOR',step:'orange'})}>orange</button>
        <button onClick={() => dispatch({type:'CHANGE_COLOR',step:'red'})}>red</button>
        <button onClick={() => dispatch({type:'CHANGE_COLOR',step:'blue'})}>blue</button>
      </p>
    </div>
  );
};

export default Test12;