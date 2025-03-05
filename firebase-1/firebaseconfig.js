// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWKo1pLSaQSpHdG1yFZozl1V4Eu8uzNYs",
  authDomain: "fir-2d536.firebaseapp.com",
  projectId: "fir-2d536",
  storageBucket: "fir-2d536.firebasestorage.app",
  messagingSenderId: "894472986885",
  appId: "1:894472986885:web:1b34913f2c71f2a314976c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {auth,db}
