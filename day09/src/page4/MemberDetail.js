import React,{useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'

const MemberDetail = () => {
  const {memberID} = useParams()
  const [member, setMember] = useState({})
  const css = {border:'1px solid tomato', margin:20, padding:15}
  const navigate = useNavigate()

  useEffect(() => {
    const url=`https://jsonplaceholder.typicode.com/users/${memberID}`
    axios.get(url)
    .then(res => setMember(res.data))
  }, [])
  const {name, email, phone, website} = member
  const onGo = () => {
    navigate('/')
  }
  return (
    <div style={css}>
      <h2>MemberDetail page : {memberID}</h2>
      <h3>이름 : {name}</h3>
      <ul>
        <li>이메일 : {email}</li>
        <li>전화번호 : {phone}</li>
        <li>웹사이트 : {website}</li>
      </ul>
      <button onClick={onGo}>목록으로</button>
    </div>
  );
};

export default MemberDetail;