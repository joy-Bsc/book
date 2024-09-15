import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import useFirebase from '../../../Hooks/UseFirebase';
import { Button } from '@mui/material';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { signIn, users, signInUsingGoogle } = useFirebase();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newData = { ...loginData };
        newData[field] = value;
        setLoginData(newData);
    };

    const handleLogInSubmit = (e) => {
        e.preventDefault();
        signIn(loginData.email, loginData.password, navigate);
        fetch('http://localhost:5000/users', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: users.email })
        }).then(res => res.json())
          .then(data => {
              console.log(data);
          });
    };

    const handleGoggleSignIn = () => {
        signInUsingGoogle(navigate);
        fetch('http://localhost:5000/users', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: users.email })
        }).then(res => res.json())
          .then(data => {
              console.log(data);
          });
    };

    return (
        <div className='login'>
            <div className='text-center text-dark'>
                <h4 className='text-light'>SHARING BOOK</h4>
            </div>
            <div className='col-md-3 m-auto border border-primary bg-dark text-light p-5'>
                <p className='text-center mt-5'>Log-in</p>
                <form onSubmit={handleLogInSubmit}>
                    <label>Email</label>
                    <input
                        name="email"
                        className='form-control'
                        type="email"
                        onChange={handleChange}
                        id="standard-basic"
                        placeholder="Your Email"
                    />
                    <label>Password</label>
                    <input
                        name="password"
                        className='form-control'
                        type="password"
                        onChange={handleChange}
                        id="standard-basic"
                        placeholder="Your Password"
                    />
                    <br />
                    <button className='form-control btn btn-success' type="submit">LOGIN</button>
                    <Link to="/register">
                        <Button color="inherit">NEW USER? Create New Account</Button>
                    </Link>
                    <button className='btn btn-warning form-control' onClick={handleGoggleSignIn}>Login With Google</button>
                </form>
            </div>
        </div>
    );
};

export default Login;