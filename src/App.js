import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Auth/Login';
import Signup from './components/Auth/SignUp.js';
import ForgotPassword from './components/Auth/ForgotPassword.js';
import ResetPassword from './components/Auth/ResetPassword.js';
import Dashboard from './components/Dashboard.jsx';
import Navbar from './components/Navbar.js';
import './App.css';
import MultiplicationQuiz from './components/MultiplicationQuiz.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/quiz" element={<MultiplicationQuiz />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;