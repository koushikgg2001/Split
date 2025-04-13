import React, { useState } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const accountName = 'John Doe'; // Replace with dynamic value in real app

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="dashboard-container">
      <nav className="navbar">
        <div className="logo">SPLITIFY</div>
        <div className="account-section">
          <button className="account-button" onClick={toggleDropdown}>
            {accountName} ▼
          </button>
          {dropdownOpen && (
            <div className="dropdown-menu">
              <div className="dropdown-item">Account Details</div>
              <div className="dropdown-item">Create a Group</div>
              <div className="dropdown-item">Contact Support</div>
              <div className="dropdown-item">Logout</div>
            </div>
          )}
        </div>
      </nav>

      <div className="main-content">
        <h2>Welcome to Splitify, {accountName}!</h2>
        {/* Your dashboard content can go here */}
      </div>
    </div>
  );
};

export default Dashboard;
