import React, { useState } from 'react';
import api from '../api';
import { API_URL } from '../apiurl';
import '../styles/login.module.css'

export const Login = () => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        api.post('token/', credentials)
            .then(response => {
                localStorage.setItem('access', response.data.access);
                localStorage.setItem('refresh', response.data.refresh);
                alert('Login successfull');
                window.location.href = '/userregister';
            })
            .catch(error => {
                alert('Invalid credentials');
            });
    };

    return (
        <div className='text-center'>
            
            <form onSubmit={handleSubmit}>
            <h2>Login</h2>
                <input type="text" name="username" onChange={handleChange} placeholder="Name" required /> <br />
                <input type="password" name="password" onChange={handleChange} placeholder="Password" required /> <br />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};
