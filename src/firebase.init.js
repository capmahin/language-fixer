// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2xuT2na0MDfKPBeweZqEhOuK2CL0lFCo",
  authDomain: "language-fixer.firebaseapp.com",
  projectId: "language-fixer",
  storageBucket: "language-fixer.appspot.com",
  messagingSenderId: "972261613447",
  appId: "1:972261613447:web:a6eeb01475c007ae49fd22",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
