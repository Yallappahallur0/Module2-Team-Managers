import React from 'react';
import './Sidebar.css';
import { FaTh, FaUserFriends, FaTasks, FaUsersCog, FaShieldAlt, FaChartBar } from 'react-icons/fa';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo-container">
        <div className="logo">
          <span>FS</span>
        </div>
        <span className="logo-text">FinSage ERP</span>
      </div>
      
      <div className="menu-items">
        <div className="menu-item">
          <FaTh className="icon" />
          <span>Dashboard</span>
        </div>
        
        <div className="menu-item">
          <FaUserFriends className="icon" />
          <span>Team Management</span>
        </div>
        
        <div className="menu-item">
          <FaTasks className="icon" />
          <span>Assign Task</span>
        </div>
        
        <div className="menu-item active">
          <FaUsersCog className="icon" />
          <span>Team Managers</span>
        </div>
        
        <div className="menu-item">
          <FaShieldAlt className="icon" />
          <span>Administrative Control</span>
        </div>
        
        <div className="menu-item">
          <FaChartBar className="icon" />
          <span>Performance Reports</span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;