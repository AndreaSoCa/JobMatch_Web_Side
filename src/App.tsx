//import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/home/Home.tsx';
import { ActiveServices, AddJobWorker, AvailableServices, CreateWork, EditJobWorker, LoginForm, PrincipalPageWorker, ProfileWorker, RegistrationForm } from './components/index.ts';
import PrincipalPageCustomer from './components/customer-pages/principal/PrincipalPageCustomer.tsx';
import { RouterLayout } from './components/navBar/RouterLayout.tsx';
import ProtectedRoute from './utils/ProtectedRoute.tsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/home" element={<Home />} /> 
        <Route path="/register" element={<RegistrationForm />} /> 
        <Route path="/login" element={<LoginForm />} /> 

        <Route element={<ProtectedRoute redirectPath='/login'/>}>
          <Route path="/customer" element={<RouterLayout userType="customer" />}>
            <Route path="/customer" element={<PrincipalPageCustomer />} />
            <Route path="/customer/hire" element={<PrincipalPageCustomer />} />
            <Route path="/customer/available-services" element={<AvailableServices />} />
            <Route path="/customer/payments" element={<AvailableServices />} />
          </Route>

          <Route path="/worker" element={<RouterLayout userType="worker" />}>
            <Route path="/worker" element={<PrincipalPageWorker />} />
            <Route path="/worker/profile" element={<ProfileWorker />} />
            <Route path="/worker/active-services" element={<ActiveServices />} />
            <Route path="/worker/abilities" element={<PrincipalPageWorker />} />
            <Route path="/worker/payments" element={<PrincipalPageWorker />} />
            <Route path="/worker/add-job" element={<AddJobWorker />} />
            <Route path="/worker/create-job" element={<CreateWork />} />
            <Route path="/worker/edit-job/:workId" element={<EditJobWorker />} />
          </Route>
        </Route>

      </Routes>
    </Router>
  );
}

export default App;