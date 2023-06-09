import React from 'react';
import './LoginPage.css';
import Avatar from 'antd/es/avatar/avatar';
import logo from '../../logo.svg'
function Register() {
  return (
    <div className="login-Page">
      <div className="login-form">
      <center>
      <Avatar size="large" src={<img src={logo} alt="avatar" />}/>
      </center>
      <br />
        <h2>Register</h2>
        <form>
          <label>Name</label>
          <input type="text" name="name" />
          <label>Email</label>
          <input type="text" name="username" />
          <label>Contact</label>
          <input type="text" name="contact" />
          <label>Password</label>
          <input type="password" name="password" />
          <label>Confirm Password</label>
          <input type="password" name="password" />
          <br />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
