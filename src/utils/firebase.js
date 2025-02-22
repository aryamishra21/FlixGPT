// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDm6k5TW-K5voJqq6mCDRo4Iu5MXVSzPOg",
  authDomain: "flixgpt-98f8a.firebaseapp.com",
  projectId: "flixgpt-98f8a",
  storageBucket: "flixgpt-98f8a.firebasestorage.app",
  messagingSenderId: "775748905643",
  appId: "1:775748905643:web:d485900870ed8c0d99a5ee",
  measurementId: "G-GVXL8KVD53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth();