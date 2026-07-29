import React, { useState } from 'react';

export const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registering:', name, email, password);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <div className="brand-logo" style={{ margin: '0 auto 1rem auto' }}>GG</div>
          <h2>Create Account</h2>
          <p>Join GoalGrid for real-time football insights</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label>Full Name</label>
            <input 
              type="text" 
              placeholder="Ujjwal Singh" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              required 
            />
          </div>

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

          <button type="submit" className="auth-btn">Create Account</button>
        </form>

        <p className="auth-redirect">
          Already have an account? <a href="#login">Login here</a>
        </p>
      </div>
    </div>
  );
};
export default Register;