import { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Userregister } from './components/Userregister';
import { Login } from './components/Login';
import { Logout } from './components/Logout';
import { Signup } from './components/Signup';
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";

function App() {
  const [token, setToken] = useState(localStorage.getItem('access'));

  // Function to update token when login/logout occurs
  const updateAuth = () => {
    setToken(localStorage.getItem('access'));
  };

  useEffect(() => {
    updateAuth(); // Check token on initial load
  }, []);

  return (
    <>
      <div>
        <BrowserRouter>
          <nav>
            <div>
              <h4>React + Django CRUD</h4>
            </div>
            <ul>
              {!token ? (
                <>
                  <li>
                    <Link to='/'>Login</Link>
                  </li>
                  <li>
                    <Link to='/signup'>Signup</Link>
                  </li>
                </>
              ) : (
                <li>
                  <Link to='/logout'>Logout</Link>
                </li>
              )}
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<Login updateAuth={updateAuth} />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/userregister" element={token ? <Userregister /> : <Navigate to='/' />} />
            <Route path="/logout" element={<Logout updateAuth={updateAuth} />} />
            <Route path="*" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
