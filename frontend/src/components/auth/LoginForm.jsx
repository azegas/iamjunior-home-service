import React, { useState } from 'react';
import { useUser } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';
import InputField from '../common/InputField';
import styles from './LoginForm.module.scss';
import '../../styles/global.scss';
import { toast } from 'react-toastify';

const LoginForm = () => {
    const { saveUserToContext } = useUser();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await loginAttempt();
    };

    const loginAttempt = async () => {
        const userData = { email, password };
        try {
            const response = await fetch('http://localhost:3000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });
            const data = await response.json();
            handleLoginResponse(response, data);
        } catch (error) {
            console.error('Error during login:', error);
            toast.error('An error occurred during login. Please try again.');
        }
    };

    const handleLoginResponse = (response, data) => {
        if (response.ok) {
            saveUserToContext(data.user);
            toast.success(
                `Login successful, hello ${data.user.username}! You can now add businesses to your favorites.`
            );
            navigate('/');
        } else {
            if (data.message) {
                toast.error(data.message);
            }
        }
    };

    return (
        <div className={styles.login}>
            <h1 className="title">Login</h1>
            <form onSubmit={handleSubmit}>
                <InputField
                    label="Email:"
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <InputField
                    label="Password:"
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginForm;
