import React, { useState } from 'react';
import { useUser } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';
import styles from './LoginForm.module.scss';
import '../../styles/global.scss';
import { toast } from 'react-toastify';

const LoginForm = () => {
    const { saveUserToContext } = useUser();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            setEmailError('Invalid email format.');
            return;
        }
        setEmailError('');

        const userData = { email, password };

        try {
            const response = await fetch('http://localhost:3000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            const data = await response.json();

            if (response.ok) {
                saveUserToContext(data.user); // Assuming the API returns the user object
                toast.success(`Login successful, hello ${data.user.username}! You can now add businesses to your favorites.`);
                navigate('/');
            } else {
                // Handle errors from the API
                if (data.message) {
                    toast.error(data.message);
                }
            }
        } catch (error) {
            console.error('Error during login:', error);
            toast.error('An error occurred during login. Please try again.');
        }
    };

    return (
        <div className={styles.login}>
            <h1 className="title">Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    {emailError && <div style={{ color: 'red' }}>{emailError}</div>}
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginForm;
