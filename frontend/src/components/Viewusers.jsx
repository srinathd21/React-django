import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../apiurl';

export const Viewusers = ({ reload }) => {
    const [userdata, setuserdata] = useState([]);
    const [editingUser, setEditingUser] = useState(null);

    useEffect(() => {
        fetchUsers();
    }, [reload]);

    const fetchUsers = () => {
        axios.get(API_URL + 'register/')
            .then(response => setuserdata(response.data))
            .catch(error => console.error('Error fetching users:', error));
    };

    const handleEdit = (user) => {
        setEditingUser(user);
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put(`${API_URL}update/${editingUser.id}/`, editingUser)
            .then(() => {
                alert('User updated successfully!');
                setEditingUser(null);
                fetchUsers();
            })
            .catch(error => console.error('Error updating user:', error));
    };

    const handleChange = (e) => {
        setEditingUser({
            ...editingUser,
            [e.target.name]: e.target.value
        });
    };

    const handledelete = (e) => {
        e.preventDefault();
        axios.delete(`${API_URL}delete/${e.target.name}/`)
            .then(() => {
                alert('User deleted successfully!');
                setEditingUser(null);
                fetchUsers();
            })
            .catch(error => console.error('Error deleting user:', error));
    }

    return (
        <div className='view-user text-center'>
            <h4>User Details</h4>
            <div className="table-data">

                <table className='table table-hover table-bordered'>
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Contact</th>
                            <th>Email</th>
                            <th>Place</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userdata.map((user, index) => (
                            <tr key={user.id}>
                                <td>{index + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.age}</td>
                                <td>{user.contact}</td>
                                <td>{user.email}</td>
                                <td>{user.place}</td>
                                <td>
                                    <button className='btn btn-info mx-2' onClick={() => handleEdit(user)}>Edit</button>
                                    <button className='btn btn-danger' name={user.id} onClick={(e) => {
                                        handledelete(e)
                                    }}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {editingUser && (
                <div className="edit-form">
                    <h4>Edit User</h4>
                    <form onSubmit={handleUpdate}>
                        <input type="text" name="name" value={editingUser.name} onChange={handleChange} placeholder="Name" />
                        <input type="number" name="age" value={editingUser.age} onChange={handleChange} placeholder="Age" />
                        <input type="email" name="email" value={editingUser.email} onChange={handleChange} placeholder="Email" />
                        <input type="text" name="contact" value={editingUser.contact} onChange={handleChange} placeholder="Contact" />
                        <input type="text" name="place" value={editingUser.place} onChange={handleChange} placeholder="Place" />
                        <button type="submit" className='btn btn-success m-2'>Update</button>
                        <button type="button" className='btn btn-danger m-2' onClick={() => setEditingUser(null)}>Cancel</button>
                    </form>
                </div>
            )}
        </div>
    );
};
