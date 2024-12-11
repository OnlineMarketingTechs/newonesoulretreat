// pages/run-emails.js
'use client';

import { useState } from 'react';

export default function RunEmails() {
  const [status, setStatus] = useState(null);

  const handleClick = async () => {
    setStatus('loading');

    try {
      const response = await fetch('/api/runEmailScript', {
        method: 'POST',
      });

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
    }
  };

  return (
    <div>
      <h1>Run Email Script</h1>
      <button onClick={handleClick} disabled={status === 'loading'}>
        {status === 'loading' ? 'Running...' : 'Run'}
      </button>

      {status === 'success' && (
        <div className="alert alert-success mt-3" role="alert">
          Email script executed successfully!
        </div>
      )}

      {status === 'error' && (
        <div className="alert alert-danger mt-3" role="alert">
          Error executing email script.
        </div>
      )}
    </div>
  );
}