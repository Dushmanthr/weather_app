import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Check if the entered email and password match the expected values
    if (username === 'mickeyarthur@gmail.com' && password === 'Mickey1234@') {
      // Authentication successful
      console.log('Login successful');
      // No need to call navigate here; useEffect handles the redirection
    } else {
      // Authentication failed
      console.log('Login failed. Invalid email or password.');
      // You can display an error message to the user or perform other actions.
    }
  };

  useEffect(() => {
    // Check if the user is authenticated and navigate to the home route
    if (username === 'mickeyarthur@gmail.com' && password === 'Mickey1234@') {
      navigate('/');
    }
  }, [username, password, navigate]);

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-64">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>
        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
