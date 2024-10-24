import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminUser.css';
import './login.css';

const Login = () => {
    const [user, setUser] = useState({
        email: '',
        password: ''
    });
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/api/admin/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });

            const data = await response.json();

            if (response.ok) {
                setMessage('Login successful');

                // Redirect based on user role
                if (data.isAdmin) {
                    navigate('/admin', { state: { username: data.username } });
                } else {
                    navigate('/user-home', { state: { username: data.username } });
                }
            } else {
                setMessage(`Error: ${data.message}`);
            }
        } catch (error) {
            setMessage('Error during login');
            console.error(error);
        }
    };

    return (
        <div className="login-page">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2 className="form-title">Login</h2>
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
                <button type="submit" className="submit-button">Login</button>
                {message && <p className="message">{message}</p>}
            </form>
        </div>
    );
};

export default Login;
