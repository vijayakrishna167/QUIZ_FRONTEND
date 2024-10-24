import React from 'react';
import './RegistrationButtons.css';
import { useNavigate } from 'react-router-dom';

const RegistrationButtons = () => {
    const navigate = useNavigate();

    const handleAdminReg = () => {
        navigate('/admin-register');
    };

    const handleUserReg = () => {
        navigate('/user-register');
    };

    return (
        <div className="registration-container">
            <div className="container-box">
                <h1 className="title1">Welcome to Quiz Website</h1>
                <div className="button-group">
                    <button className="reg-button admin-button" onClick={handleAdminReg}>Admin Registration</button>
                    <button className="reg-button user-button" onClick={handleUserReg}>User Registration</button>
                </div>
            </div>
        </div>
    );
};

export default RegistrationButtons;
