import React, { createContext, useMemo, useState } from 'react';

export const ChangeColorContext = createContext()

const ChangeColorProvider = ( props ) => {
  const [color, setColor] = useState('hotpink')
  const onColor = (text) => {
    setColor(text)
  }
  const value = useMemo(() => ({color, onColor}), [color, onColor])
  return (
    <ChangeColorContext.Provider value={{color, onColor}}>
      {props.children}
    </ChangeColorContext.Provider>
  );
};

export default ChangeColorProvider;