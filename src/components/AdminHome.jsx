import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './AdminHome.css';

const AdminHome = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const username = location.state?.username || 'Admin';  // Get the username passed from login

    const handleAddQuestionClick = () => {
        navigate('/admin-add-question');
    };

    return (
        <div className="admin-home-page">  {/* Apply main class for page styling */}
            <h1 className="admin-home-title">Welcome, {username}! (Admin Dashboard)</h1>  {/* Title class */}
            <button className="admin-home-button" onClick={handleAddQuestionClick}> {/* Button class */}
                Add New Quiz Question
            </button>
        </div>
    );
};

export default AdminHome;
