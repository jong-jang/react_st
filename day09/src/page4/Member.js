import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Member = ({item}) => {
  const {id, name} = item
  const css = {border:'1px solid tomato', margin:20, padding:15}
  let navigate = useNavigate()
  const detailView = () => {
    navigate(`/member/${id}`)
  }
  return (
    <div style={css}>
      <h4> ID : {id}</h4>
      <h3> 이름 : {name}</h3>
      <p><Link to={`/member/${id}`}> 자세히 보기 </Link></p>
      <button onClick={detailView}>상세보기</button>
    </div>
  );
};

export default Member;