import React from 'react';
import styled, { keyframes } from 'styled-components'

const Container = styled.div`
  height:100vh; display: flex; justify-content: center;
  background-color: skyblue; align-items: center;
`

const ani = keyframes`
  0%{transform:translateY(0px)}
  25%{transform:translateY(-20px) rotate(20deg)}
  50%{transform:translateY(10px)}
  75%{transform:translateY(-20px) rotate(-20deg)}
  100%{transform:translateY(0px)}
`

const Hot = styled.div`
  font-size: 120px;
  animation: ${ani} 3s infinite cubic-bezier(0.175, 0.885, 0.32, 1.275)
`

const Test9 = () => {
  return (
    <Container>
      <Hot>🎩</Hot>
    </Container>
  );
};

export default Test9;