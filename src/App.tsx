//import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/home/Home.tsx';
// import UserRegister from './components/register/userRegister.tsx';
// import WorkerRegister from './components/register/workerRegister.tsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/home" element={<Home />} /> 
        {/* <Route path="/userRegister" element={<UserRegister />} />
        <Route path="/workerRegister" element={<WorkerRegister />} /> */}
      </Routes>
    </Router>
  );
}

export default App;