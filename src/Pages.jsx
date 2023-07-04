import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Timeline from './Timeline';
import Team from './Teams';
import Register from './Register';

const Pages = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/leads" element={<Team />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default Pages;
