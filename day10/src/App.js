import React from 'react';
import Color from './components/color/Color';
import Todos from './components/todos/Todos';
import ColorProvider from './contexts/ColorContext';
import TodoProvider from './contexts/TodoContext';

const App = () => {
  return (
    <div>
      <TodoProvider>
        <ColorProvider>
          <Todos />
          <hr/>
          <Color />
        </ColorProvider>
      </TodoProvider>
    </div>
  );
};

export default App;
