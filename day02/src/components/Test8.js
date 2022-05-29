import React from 'react';
import Test8Sub from './Test8Sub';

const Test8 = () => {
  return (
    <div>
      <Test8Sub
        name="김태리"
        age = {22}
        addr = "제주도"
        tel = "010-0000-0111"
        done = {true}
        color = "tomato"
        bgColor = "hotpink"
      />
      <hr/>
      <Test8Sub
        name="김다미"
        addr="울산"
        color="skyblue"
        bgColor="yellow"
      />
      <hr/>
      <Test8Sub/>
    </div>
  );
};

export default Test8;