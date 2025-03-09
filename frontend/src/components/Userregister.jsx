import React, { useState } from 'react';
import axios from 'axios';
import { API_URL } from '../apiurl';
import { Viewusers } from './Viewusers';
import '../styles/userreg.css'

export const Userregister = () => {
    const [reload, setreload] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        email: '',
        contact: '',
        place: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post(API_URL + 'register/', formData)
            .then(response => {
                console.log('✅ User registered successfully:');
                setFormData({
                    name: '',
                    age: '',
                    email: '',
                    contact: '',
                    place: ''
                })
                setreload(!reload)
                alert('User registered successfully!');
            })
            .catch(error => {
                console.error('❌ Error registering user:', error);
                alert('Failed to register user!');
            });
    };

    return (
        <div className='d-flex justify-content-around mt-5'>
            <div className='user-register'>
                

                <form className='text-center userregister' onSubmit={handleSubmit}>
                <h4>User Register</h4>
                    <div>
                        <label htmlFor="username">Username:</label> <br />
                        <input type="text" id="username" name="name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div>
                        <label htmlFor="age">Age:</label> <br />
                        <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} required />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label> <br />
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div>
                        <label htmlFor="contact">Contact:</label> <br />
                        <input type="tel" id="contact" name="contact" value={formData.contact} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="place">Place:</label> <br />
                        <input type="text" id="place" name="place" value={formData.place} onChange={handleChange} />
                    </div>
                    <button type="submit">Register</button>
                </form>
            </div>

            <Viewusers reload={reload} />
        </div>
    );
};
