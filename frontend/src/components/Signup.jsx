import React, { useState } from 'react';
import api from '../api';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../apiurl';


export const Signup = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ username: '', email: '', password: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        api.post(API_URL + 'formuser/', formData)
            .then(() => {
                alert('User registered successfully!')
                navigate('/login')
                
            })
            .catch(() => alert('Registration failed or User already registered'));
    };

    return (
        <div className='text-center'>
            
            <form  onSubmit={handleSubmit}>
            <h2>Signup</h2>
                <input type="text" name="username" onChange={handleChange} placeholder="Name" required /> <br />
                <input type="email" name="email" onChange={handleChange} placeholder="Email" required /> <br />
                <input type="password" name="password" onChange={handleChange} placeholder="Password" required /> <br />
                <button type="submit">Signup</button>
            </form>
        </div>
    );
};
