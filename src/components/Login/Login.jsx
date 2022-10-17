import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Login.css';

async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
}

export default function Login({ setToken }) {

    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
          username,
          password
        });
        setToken(token);
    }

    return(
      <div className="inputs">
        <h1 className='pleaseLog'>Please Log In</h1>
        <form onSubmit={handleSubmit}>
          <label className='logInp'>
            <input 
                type="text"
                placeholder='userName'
                className="form-control-plaintext"
                onChange={e => setUserName(e.target.value)}/>
          </label>
          <label className='logInp'>
            <input 
                type="password"
                placeholder='password'
                className="form-control-plaintext"
                onChange={e => setPassword(e.target.value)}/>
          </label>
          <div>
            <button
                className="btn btn-success"
                type="submit">Log-in</button>
          </div>
        </form>
      </div>
    )
  }

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}