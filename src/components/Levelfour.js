import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Levelfour = ( ) => {
  const [prompt, setPrompt] = useState('');
  const [password, setPassword] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [passwordCorrect, setPasswordCorrect] = useState(false);
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

    if (password === "the awakening") {
      setPasswordCorrect(true);
    } else {
      setPasswordCorrect(false);
    }
  };

  const handleValidate = () => {
    navigate('/level2');
  };

  return (
    <div>
      <h1>Test FastAPI Endpoint</h1>
      <h1>Level 4</h1>
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
          Nextlevel
        </button>
      )}
    </div>
  );
};

export default Levelfour;
