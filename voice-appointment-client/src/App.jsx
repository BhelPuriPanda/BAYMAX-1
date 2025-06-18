// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, Navigate } from "react-router-dom";
import AppointmentForm from "./components/AppointmentForm";
import Login from "./components/Login";
import Home from "./components/Home";

function AppRoutes() {
  const [token, setToken] = useState(null);
  const navigate = useNavigate();

  const handleLogin = (newToken) => {
    setToken(newToken);
    navigate("/app");
  };

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login onLogin={handleLogin} />} />
      <Route path="/app" element={token ? <AppointmentForm token={token} /> : <Navigate to="/login" />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;

