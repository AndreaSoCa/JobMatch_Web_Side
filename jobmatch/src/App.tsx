import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/home.tsx';
import Register from './components/register.tsx';

const App = () => {
  return (
    <Router>
      <Routes> 
        <Route path="/" element={<Home />} /> 
        <Route path="/home" element={<Home />} /> 
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
