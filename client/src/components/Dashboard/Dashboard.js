import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    friendName: '',
    email: '',
    amount: '',
  });

  const accountName = 'John Doe';
  const navigate = useNavigate();

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);
  const toggleModal = () => setShowModal((prev) => !prev);

  const handleOptionClick = (option) => {
    const routes = {
      account: '/account-details',
      group: '/create-group',
      support: '/contact-support',
      logout: '/login',
    };
    navigate(routes[option]);
    setDropdownOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveExpense = () => {
    console.log('Saving expense to MongoDB:', formData);
    // TODO: Replace with actual MongoDB integration
    toggleModal();
    setFormData({ friendName: '', email: '', amount: '' });
  };

  return (
    <div className="dashboard-layout">
      {/* Left Sidebar */}
      <div className="sidebar left-sidebar">
        <h3>Navigation</h3>
        <p>Links / Options</p>
      </div>

      {/* Center Main Dashboard */}
      <div className="main-dashboard">
        <nav className="navbar">
          <div className="logo">SPLITIFY</div>
          <div className="account-section">
            <button className="account-button" onClick={toggleDropdown}>
              {accountName} ▼
            </button>
            {dropdownOpen && (
              <div className="dropdown-menu show">
                <div onClick={() => handleOptionClick('account')}>Account Details</div>
                <div onClick={() => handleOptionClick('group')}>Create a Group</div>
                <div onClick={() => handleOptionClick('support')}>Contact Support</div>
                <div onClick={() => handleOptionClick('logout')}>Logout</div>
              </div>
            )}
          </div>
        </nav>

        <div className="dashboard-content">
          <h2>Welcome, {accountName}!</h2>
          <div className="button-row">
            <button onClick={toggleModal}>Add an Expense</button>
            <button>Settle Up</button>
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="sidebar right-sidebar">
        <h3>Groups / Profile</h3>
        <p>Details / Settings</p>
      </div>

      {/* Add Expense Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Add Expense</h3>
            <input
              type="text"
              name="friendName"
              placeholder="Friend's Name"
              value={formData.friendName}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Friend's Email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="number"
              name="amount"
              placeholder="Expense Amount"
              value={formData.amount}
              onChange={handleChange}
            />
            <div className="modal-actions">
              <button onClick={handleSaveExpense}>Save</button>
              <button onClick={toggleModal}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
