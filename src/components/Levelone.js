import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import bcrypt from 'bcryptjs';

const Levelone = () => {
  const [prompt, setPrompt] = useState('');
  const [password, setPassword] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [passwordCorrect, setPasswordCorrect] = useState(false);

  // Example hash (replace this with your actual hash)
  const hashedPassword = '$2a$10$E9ZlRGnLJZ8O3P7mzdRF5e2z78z.uZ6flBO2X6M0yEZn02T9DJ/2u'; // Hashed password

  const navigate = useNavigate(); // Hook for navigation

  const handlePromptChange = (e) => {
    setPrompt(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const res = await fetch('http://104.211.243.150/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();
      setResponse(data.response);

    } catch (error) {
      console.error(error);
      setResponse('An error occurred');
    } finally {
      setLoading(false);
    }

    // Compare the entered password's hash with the existing hash
    const isMatch = await bcrypt.compare(password, hashedPassword);
    setPasswordCorrect(isMatch);
  };

  const handleValidate = () => {
    navigate('/level2');
  };

  return (
    <div>
      <h1>Test FastAPI Endpoint</h1>
      <h1>Level 1</h1>
      <input
        type="text"
        value={prompt}
        onChange={handlePromptChange}
        placeholder="Enter your prompt"
      />
      <input
        type="text"
        value={password}
        onChange={handlePasswordChange}
        placeholder="Enter password"
      />
      <button onClick={handleSubmit} disabled={loading}>
        {loading ? 'Submitting...' : 'Submit'}
      </button>
      <div>
        <h2>Response:</h2>
        <p>{response}</p>
      </div>
      {passwordCorrect && (
        <button onClick={handleValidate}>
          Next Level
        </button>
      )}
    </div>
  );
};

export default Levelone;
