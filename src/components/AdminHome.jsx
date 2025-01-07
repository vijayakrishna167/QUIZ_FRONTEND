import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './AdminHome.css';
import AdminPanel from './adminpanel/sidebar';

const AdminHome = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const username = location.state?.username || 'Admin';  // Get the username passed from login

    const handleAddQuestionClick = () => {
        navigate('/admin-add-question');
    };

    return (
        // <div className="admin-home-page">  
        // <AdminPanel/>
        //     {/* <h1 className="admin-home-title">Welcome, {username}! (Admin Dashboard)</h1>  
        //     <button className="admin-home-button" onClick={handleAddQuestionClick}> 
        //         Add New Quiz Question
        //     </button> */}
        // </div>
        <AdminPanel/>
    );
};

export default AdminHome;
