import React from 'react'

export const Logout = () => {
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');

    // Redirect to login page
    window.location.href = '/login';
}
