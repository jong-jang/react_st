import React, { useEffect, useState } from 'react';
import axios from 'axios'

const Test13 = () => {
  const [post, setPost] = useState({})
  const [id, setId] = useState(1)
  const [num, setNum] = useState(1)

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`
    axios.get(url)
      .then(res => setPost(res.data))
  }, [id])

  const onSubmit = (e) => {
    e.preventDefault()
    setId(num)
  }
  
  return (
    <form onSubmit={onSubmit}>
      <p><input type="text" value={num} name="id" onChange={e => setNum(e.target.value)}/></p>
      <button type="submit">검색</button>
      <h3>
        {post.id} / {post.title}
      </h3>
    </form>
  );
};

export default Test13;