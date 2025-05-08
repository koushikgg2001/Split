import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const accountName = 'John Doe';
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const handleOptionClick = (option) => {
    switch (option) {
      case 'account':
        navigate('/account-details');
        break;
      case 'group':
        navigate('/create-group');
        break;
      case 'support':
        navigate('/contact-support');
        break;
      case 'logout':
        navigate('/login');
        break;
      default:
        break;
    }
    setDropdownOpen(false);
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
            <div className="dropdown-menu show">
              <div className="dropdown-item" onClick={() => handleOptionClick('account')}>
                Account Details
              </div>
              <div className="dropdown-item" onClick={() => handleOptionClick('group')}>
                Create a Group
              </div>
              <div className="dropdown-item" onClick={() => handleOptionClick('support')}>
                Contact Support
              </div>
              <div className="dropdown-item" onClick={() => handleOptionClick('logout')}>
                Logout
              </div>
            </div>
          )}
        </div>
      </nav>

      <div className="main-content">
        <h2>Welcome to Splitify, {accountName}!</h2>
        <p>This is your dashboard. Choose an option from the top right dropdown to proceed.</p>
      </div>
    </div>
  );
};

export default Dashboard;
