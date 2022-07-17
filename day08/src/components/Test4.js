import React, { useMemo, useState } from 'react';

const user = [
  {id:1, name:'김태리'},
  {id:2, name:'다음'},
  {id:3, name:'daum'},
  {id:4, name:'네이버'},
  {id:5, name:'NAVER'},
  {id:6, name:'네이트'},
  {id:7, name:'nate'},
  {id:8, name:'NaTE'},
  {id:9, name:'DAUM'},
  {id:10, name:'GOOgle'},
  {id:11, name:'김다미'}
]

const Test4 = () => {
  const [text, setText] = useState('')

// sql 초성검사
// setData(user.filter(item => item.name.toLowerCase().includes(text.toLowerCase())))
  const data = useMemo(() => {
    return user.filter(item => item.name.toLowerCase().includes(text.toLowerCase()))
  }, [text])
  
  return (
    <div>
      <input type="text" value={text} onChange={e => setText(e.target.value)} />
      <hr />
      <ul>
        {
          data.map(item => <li key={item.id}>
            {item.id} / {item.name}
          </li>)
        }
      </ul>
    </div>
  );
};

export default Test4;