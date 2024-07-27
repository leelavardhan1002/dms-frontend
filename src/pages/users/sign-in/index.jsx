import React, { useState } from 'react';

const Signin = ({setIsSigningUp, isSigningUp}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Logging in with', email, password);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-80">
        <h2 className="text-2xl mb-4">Sign In</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            className="w-full p-2 border border-gray-300 rounded"
            required 
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700">Password:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            className="w-full p-2 border border-gray-300 rounded"
            required 
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">Sign In</button>
        <button className="text-black" onClick={() => setIsSigningUp(!isSigningUp)}>
          {isSigningUp ? 'Already have an account? Sign In' : 'No account? Sign Up'}
        </button>
      </form>
    </div>
  );
}

export default Signin;
