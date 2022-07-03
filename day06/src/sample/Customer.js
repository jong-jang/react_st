import React, { useEffect, useRef, useState } from 'react';
import AddUser from './AddUser';
import EditUser from './EditUser';
import ListUser from './ListUser';
import Message from './Message';
import './style.css'

const dataList = [
  {id:1, name:'김태리', addr:'서울'},
  {id:2, name:'송혜교', addr:'제주'},
  {id:3, name:'김다미', addr:'울산'},
  {id:4, name:'전지현', addr:'대구'},
  {id:5, name:'유재석', addr:'부산'}
]

const Customer = () => {
  const no = useRef(dataList.length + 1)
  const [data, setData] = useState(
    () => JSON.parse(localStorage.getItem('data')) || dataList
  )
  const [isEdit, setIsEdit] = useState(false)
  const [current, setCurrent] = useState({})
  const [msg, setMsg] = useState('테스트')
  const [isShow, setIsShow] = useState(false)


  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data))
  }, [data])


// 삭제
  const onDel = (id) => {
    setData(data.filter(item => item.id !== id))
    setIsShow(true)
    setMsg('명단에서 삭제했습니다.')
  }
// 추가
  const onAdd = (user) => {
    user.id = no.current++
    setData([...data, user])
    setIsShow(true)
    setMsg('명단 추가했습니다.')
  }
// 수정
  const onEdit = (user) => {
    setIsEdit(true)
    setCurrent(user)
    setIsShow(true)
    setMsg('변경해주세요')
  }
// 갱신
  const onUpdata = (user) => {
    setIsEdit(false)
    setData(data.map(item => item.id === user.id ? user : item))
    setIsShow(true)
    setMsg('변경 완료')
  }

  return (
    <>
      <div className="Customer">
        <Message msg={msg} isShow={isShow} setIsShow={setIsShow}/>
        {
          isEdit ? <EditUser current={current} key={current.id} onUpdata={onUpdata} setIsEdit={setIsEdit} /> : <AddUser onAdd={onAdd} />
        }
        <ListUser data={data} onDel={onDel} onEdit={onEdit} />
      </div>
    </>
  );
};

export default Customer;