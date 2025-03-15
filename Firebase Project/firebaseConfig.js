// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBT7NYz18TilqwBgnNmlBoSWWzC5em_1PI",
  authDomain: "fir-project-bb76e.firebaseapp.com",
  projectId: "fir-project-bb76e",
  storageBucket: "fir-project-bb76e.firebasestorage.app",
  messagingSenderId: "914661421431",
  appId: "1:914661421431:web:63089bfd7448c48c09b172"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export { auth, db, provider };