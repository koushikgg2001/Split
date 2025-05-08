import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import HomePage from './components/HomePage/HomePage';
import AccountDetails from './components/AccountDetails/AccountDetails';
import CreateGroup from './components/CreateGroup/CreateGroup';
import ContactSupport from './components/ContactSupport/ContactSupport';
import Dashboard from './components/Dashboard/Dashboard';


function App() {
  return (
    <div className="App">
       <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/account-details" element={<AccountDetails />} />
          <Route path="/create-group" element={<CreateGroup />} />
          <Route path="/contact-support" element={<ContactSupport />} />

        </Routes>
    </div>
  );
}

export default App;

