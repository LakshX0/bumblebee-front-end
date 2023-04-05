import React from 'react';
import './LoginPage.css';

function LoginPage() {
  return (
    <div className="login-Page">
    <div className="login-form">
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
