import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from './page2/About';
import Front from './page2/Front';
import Home from './page2/Home';
import NotFiles from './page2/NotFiles';
import Profile from './page2/Profile';

const dataList = [
  {title:'html', info:'html에 대한 설명입니다.'},
  {title:'css', info:'css에 대한 설명입니다.'},
  {title:'js', info:'js에 대한 설명입니다.'},
  {title:'react', info:'react에 대한 설명입니다.'},
  {title:'vue', info:'vue에 대한 설명입니다.'},
]

const App = () => {
  return (
    <BrowserRouter>
      <>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li style={{marginBottom:30}}><Link to="/profile">Profile</Link></li>

            <li><Link to="/front/html">html</Link></li>
            <li><Link to="/front/css">css</Link></li>
            <li><Link to="/front/js">js</Link></li>
            <li><Link to="/front/react">react</Link></li>
            <li><Link to="/front/vue">vue</Link></li>
          </ul>
        </nav>
        {/* 화면에 보이는 영역 */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="profile" element={<Profile />} />
          <Route path="front/:name" element={<Front dataList={dataList} />} />

          <Route path="*" element={<NotFiles />} />
        </Routes>
      </>
    </BrowserRouter>
  );
};

export default App;
