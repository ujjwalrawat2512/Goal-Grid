import React, { useState } from 'react';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Logging in with:', email, password);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <div className="brand-logo" style={{ margin: '0 auto 1rem auto' }}>GG</div>
          <h2>Welcome Back</h2>
          <p>Login to your GoalGrid account</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label>Email Address</label>
            <input 
              type="email" 
              placeholder="name@example.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>

          <button type="submit" className="auth-btn">Sign In</button>
        </form>

        <p className="auth-redirect">
          Don't have an account? <a href="#register">Register here</a>
        </p>
      </div>
    </div>
  );
};
export default Login;