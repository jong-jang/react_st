import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from './page1/About';
import Home from './page1/Home';
import NotFiles from './page1/NotFiles';
import Profile from './page1/Profile';
import Sub from './page1/Sub';

const App = () => {
  return (
    <BrowserRouter>
      <>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/sub">Sub</Link></li>
          </ul>
        </nav>
        {/* 화면에 보이는 영역 */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/sub" element={<Sub />} />
          <Route path="*" element={<NotFiles />} />
        </Routes>
      </>
    </BrowserRouter>
  );
};

export default App;
