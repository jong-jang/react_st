import React, { useEffect } from 'react';

const Message = ({msg,isShow,setIsShow}) => {
  useEffect(() => {
    const time = setTimeout(() => {
      setIsShow(false)
    }, 2000)
    return()=>{
      clearTimeout(time)
    }
  }, [msg])
  return (
    <>
      <div className={`message ${isShow ? "on" : ''}`}>
        {msg}
      </div>
    </>
  );
};

export default Message;