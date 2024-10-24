import React, { useState, useEffect } from 'react';
import './AdminUser.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminRegistration = () => {
    const [admin, setAdmin] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAdmin({ ...admin, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await fetch('http://localhost:5000/api/admin/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(admin),
            });
    
            const data = await response.json();
    
            if (response.ok) {
                toast.success('Admin registered successfully!');
            } else {
                toast.error(`Error: ${data.message}`);
            }
        } catch (error) {
            toast.error('Error during registration');
            console.error(error);
        }
    };

    return (
        <div className="registration-page">
            <form className="registration-form" onSubmit={handleSubmit}>
                <h2 className="form-title">Admin Registration</h2>
                <input
                    className="input-field"
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={admin.username}
                    onChange={handleChange}
                    required
                />
                <input
                    className="input-field"
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={admin.email}
                    onChange={handleChange}
                    required
                />
                <input
                    className="input-field"
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={admin.password}
                    onChange={handleChange}
                    required
                />
                <button type="submit" className="submit-button">Register</button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default AdminRegistration;
