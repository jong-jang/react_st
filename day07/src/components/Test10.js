import React, { useEffect, useState } from 'react';
import axios from 'axios'

const Test10 = () => {
  const [data, setData] = useState([])

/*   useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setData(data))
  }, []) 
*/
/*   useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => setData(res.data))
  }, []) 
*/

  useEffect(() => {
    const getData = async() => {
      const res = await axios('https://jsonplaceholder.typicode.com/posts');
      setData(res.data)
    }
    getData()
  }, [])

/*   useEffect(() => {
    const getData = async() => {
      const res = await axios('https://jsonplaceholder.typicode.com/posts');
      const data = await res.json();
      setData(data)
    }
    getData()
  }, []) 
*/

  return (
    <div>
      <ul>
        {
          data.map(item => <li key={item.id}>
              {item.id} / {item.title}
            </li>)
        }
      </ul>
    </div>
  );
};

export default Test10;