import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
    const [username, setUsername] = useState('');
    const navigate = useNavigate();
    const [error, setError] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        // Fetch user data based on username
        const response = await axios.get(`http://localhost:3000/users/${username}`);
        const user = response.data;
  
        if (user) {
          navigate(`/dashboard`);
        }
      } catch (error) {
        // Handle error cases (e.g., server unreachable, etc.)
        console.error('Login error:', error);
        setError('User not found');
      }
    };

    return (
    <div>
      <h1>Testing</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
    );
  }

  export default Login;
  