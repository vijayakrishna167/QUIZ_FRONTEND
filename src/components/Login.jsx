import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminUser.css';
import './login.css';

const Login = ({ setUsername }) => { // Accept setUsername as a prop
    const [user, setUser] = useState({ email: '', password: '' });
    const [message, setMessage] = useState('');
    const [isAdmin, setIsAdmin] = useState(true); // Toggle between admin and user login
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const route = isAdmin ? 'admin' : 'user'; // Select route based on isAdmin state
    
        try {
            const response = await fetch(`http://localhost:5000/api/${route}/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user),
            });
    
            const data = await response.json();
    
            if (response.ok) {
                setMessage('Login successful!');
                console.log(data); // Log the response data to see the username
                
                // Set the username in the parent component's state
                setUsername(data.username); // Ensure data.username is set correctly
    
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
                <div className="toggle-container">
                    <button type="button" className={`toggle-button ${isAdmin ? 'active' : ''}`} onClick={() => setIsAdmin(true)}>Admin</button>
                    <button type="button" className={`toggle-button ${!isAdmin ? 'active' : ''}`} onClick={() => setIsAdmin(false)}>User</button>
                </div>
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
