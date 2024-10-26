// frontend/src/components/UserHome.js
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './UserHome.css';

const UserHome = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const username = location.state?.username || 'User';

    const handleTakeQuizClick = () => {
        navigate('/quiz');
    };

    return (
        <div className="user-home-container">
            <h1>Welcome, {username}!</h1>
            <p>Ready to challenge yourself with a quiz?</p>
            <button className="take-quiz-button" onClick={handleTakeQuizClick}>Take a Quiz</button>
        </div>
    );
};

export default UserHome;
