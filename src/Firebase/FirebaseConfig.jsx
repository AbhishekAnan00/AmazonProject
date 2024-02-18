// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import  {getFirestore}  from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBdSPLk2NRyKC0F2CTbNFdJwkLLEhIpRLg",
  authDomain: "project-ac703.firebaseapp.com",
  projectId: "project-ac703",
  storageBucket: "project-ac703.appspot.com",
  messagingSenderId: "519647312934",
  appId: "1:519647312934:web:ed87791d4cc387a7a7fae7",
  measurementId: "G-45Z46D4GHS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth };
