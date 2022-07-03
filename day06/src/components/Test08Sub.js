import React, { useEffect } from 'react';

const Test08Sub = ({msg, isShow, setIsShow}) => {
  useEffect(()=> {
    let time = setTimeout(()=> {
      setIsShow(false);
    }, 3000)
    return() => {
      clearTimeout(time)
    }
  }, [isShow])
  return (
    <>
    {
      isShow && <div style={{background:'hotpink', padding:'20px 30px', margin:20, fontSize:25}}>메세지:{msg}
      </div>
    }
      <p> 3초후에 사라지기</p>
    </>
  );
};

export default Test08Sub;