import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  
  // State for form inputs
  const [formData, setFormData] = useState({
    email: '',    // Agar backend 'username' expect kar raha hai, to ise 'username' kar dena
    password: ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Handle Input Changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await axios.post(
        'http://localhost:3000/api/auth/login', // Backend Port check kar lena (e.g. 5000 ya 8000)
        formData,
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true // JWT Cookie receive karne ke liye
        }
      );

      console.log('Login Successful:', response.data);
      
      // User data store kar lo local storage mein
      if (response.data?.data) {
        localStorage.setItem('user', JSON.stringify(response.data.data));
      }

      alert('Login Successful!');
      navigate('/'); // Redirect to Home page after successful login
    } catch (err) {
      console.error('Login Error:', err);
      setError(
        err.response?.data?.message || 'Invalid Credentials! Phir se try karo.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>GoalGrid</h2>
        <h3>Welcome Back!</h3>
        
        {error && <div className="error-banner">{error}</div>}

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="email">Email / Username</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Enter your email or username"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <p className="auth-redirect">
          Account nahi hai? <Link to="/register">Register here</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;