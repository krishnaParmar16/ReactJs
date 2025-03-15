


import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { auth } from '../../firebaseConfig';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async () => {
    await signInWithEmailAndPassword(auth, email, password).then((res) => {
      console.log(res);
      navigate('/dashboard');
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-6">Sign In</h1>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border border-gray-600 bg-gray-700 rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 border border-gray-600 bg-gray-700 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition cursor-pointer"
          onClick={handleSignIn}>
          Sign In
        </button>
        <h1 className="mt-4 text-center text-gray-400">
          New User?{' '}
          <Link to="/" className="text-blue-400 hover:underline">
            Create an account
          </Link>
        </h1>
      </div>
    </div>
  );
}

export default SignIn;
