// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmnrDX27pZA4eUX2VYVe_vjoIPhSzRLNQ",
  authDomain: "rj-27255.firebaseapp.com",
  projectId: "rj-27255",
  storageBucket: "rj-27255.appspot.com",
  messagingSenderId: "20918746882",
  appId: "1:20918746882:web:76cfed3a54af075287cc1b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)