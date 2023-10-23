//import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/home/Home.tsx';
import { LoginForm, PrincipalPage, RegistrationForm } from './components/index.ts';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/home" element={<Home />} /> 
        <Route path="/register" element={<RegistrationForm />} /> 
        <Route path="/login" element={<LoginForm />} /> 
        <Route path="/principal" element={<PrincipalPage />} /> 
      </Routes>
    </Router>
  );
}

export default App;