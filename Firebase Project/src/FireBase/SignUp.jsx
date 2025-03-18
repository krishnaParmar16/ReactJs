import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, db, provider } from "../../firebaseConfig";
import { doc, setDoc } from 'firebase/firestore';

function SignUp() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    await createUserWithEmailAndPassword(auth, email, password).then((res) => {
      setDoc(doc(db, 'Users', res.user.uid), { username, email });
      navigate('/dashboard');
    });
  };

  const handleGoogleSignIn = async () =>{
      await signInWithPopup(auth,provider).then((res)=>{
        // console.log(res);
      setDoc(doc(db, 'Users', res.user.uid), { username, email });
      navigate('/dashboard');
      })
  }  

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-6">Sign Up</h1>
        <input
          type="text"
          placeholder="Username"
          className="w-full p-3 border border-gray-600 bg-gray-700 rounded-md mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
          onChange={(e) => setUsername(e.target.value)}
        />
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
          onClick={handleSignUp}>
          Sign Up
        </button>
        <button 
        onClick={handleGoogleSignIn}
        className="w-full flex items-center justify-center gap-2 bg-white text-gray-600 py-3 rounded-md hover:shadow-xl transition cursor-pointer mt-3"
      >
        <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google" className="w-5 h-5" />
        Sign in with Google
      </button>
        <h1 className="mt-4 text-center text-gray-400">
          Already have an account?{' '}
          <Link to="/signin" className="text-blue-400 hover:underline">
            Sign In
          </Link>
        </h1>
      </div>
    </div>
  );
}

export default SignUp;

