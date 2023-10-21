import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/home/Home.tsx";
import RegistrationForm from "./components/register/Register.tsx";
import Dashboard from "./components/dashboard/Dashboard.tsx";
import Preferences from "./components/preferences/Preferences.tsx";
import Login from "./components/login/Login.tsx";

function setToken(userToken: string): void {
  sessionStorage.setItem("token", JSON.stringify(userToken));
}

function getToken(): string | null {
  const tokenString = sessionStorage.getItem("token");
  const userToken = tokenString ? JSON.parse(tokenString) : null;
  return userToken;
}

const App: React.FC = () => {
  const token = getToken();
  if (!token) {
    return <Login setToken={setToken} />;
  }
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/preferences" element={<Preferences />} />
      </Routes>
    </Router>
  );
};

export default App;
