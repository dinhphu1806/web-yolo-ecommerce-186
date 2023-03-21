// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFt5WRonwfr37jUD1J90WTd8LlJmiZJpk",
  authDomain: "yolo-ecommerce-3c91d.firebaseapp.com",
  projectId: "yolo-ecommerce-3c91d",
  storageBucket: "yolo-ecommerce-3c91d.appspot.com",
  messagingSenderId: "566824998642",
  appId: "1:566824998642:web:770d1a79b17750b072a26b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);