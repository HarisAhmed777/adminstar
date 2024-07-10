import React, { useState, useContext } from "react";
import axios from "axios";
import { baseUrl } from "../../../url";
import './login.css'
import { Link, useNavigate } from 'react-router-dom';
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); 
    const navigate = useNavigate();
    axios.defaults.withCredentials = true;

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${baseUrl}/login`, { email, password }, { headers: { 'Content-Type': 'application/json' } })
            .then(res => {
                if (res.data.status === "Success") {
                    if (res.data.role === "admin") {
                        localStorage.setItem('jwtToken', res.data.token);
                        navigate('/admin');
                    }
                    else if(res.data.role ==="user"){
                        alert("Access blocked")
                    }
                }
            })
            .catch(err => {
                if (err.response) {
                    setError(err.response.data.error); 
                } else {
                    setError('An unexpected error occurred');
                }

            });
    }

    return (
        <div className='login-container'>
            <h2 className="text-dark">Login</h2>
            <form onSubmit={handleSubmit}>
                <input className='form-control-both text-dark' onChange={(e) => setEmail(e.target.value)} placeholder='Email' type='email' />
                <input className='form-control-both text-dark' onChange={(e) => setPassword(e.target.value)} placeholder='Password' type='password' />
                {error && <p className="error-messagelogin text-danger">{error}</p>} 
                <button className='btn-login'>LOGIN</button>
            </form>
        </div>
    );
}

export default Login;
