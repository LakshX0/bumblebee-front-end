import React from 'react';
import './LoginPage.css';
import Avatar from 'antd/es/avatar/avatar';
import logo from '../../logo.svg'

function LoginPage() {
  return (
    <div className="login-Page">
    <div className="login-form">
      <center>
      <Avatar size="large" src={<img src={logo} alt="avatar" />}/>
      </center>
      <br />
      <h2>Login</h2>
      <form>
        <label>Email</label>
        <input type="text" name="username" />
        <label>Password</label>
        <input type="password" name="password" />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
    </div>
  );
}

export default LoginPage;
