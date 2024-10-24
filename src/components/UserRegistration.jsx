import React, { useState } from 'react';
import './AdminUser.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserRegistration = () => {
    const [user, setUser] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const userData = {
            username: user.username, // Make sure 'user' is your state variable for user input
            email: user.email,
            password: user.password,
        };
    
        try {
            const response = await fetch('http://localhost:5000/api/user/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });
    
            const data = await response.json();
    
            if (response.ok) {
                toast.success('User registered successfully!');
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
                <h2 className="form-title">User Registration</h2>
                <input
                    className="input-field"
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={user.username}
                    onChange={handleChange}
                    required
                />
                <input
                    className="input-field"
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={user.email}
                    onChange={handleChange}
                    required
                />
                <input
                    className="input-field"
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={user.password}
                    onChange={handleChange}
                    required
                />
                <button type="submit" className="submit-button">Register</button>
            </form>
            <ToastContainer/>
        </div>
    );
};

export default UserRegistration;
