import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import axios from 'axios';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" Component={Login} />
          <Route path="/dashboard" Component={Dashboard} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
