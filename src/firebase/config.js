// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEa0TxQQPflJI3Pb3anKPCnpgSkgQ6AOo",
  authDomain: "e-comerce-garelli.firebaseapp.com",
  projectId: "e-comerce-garelli",
  storageBucket: "e-comerce-garelli.appspot.com",
  messagingSenderId: "161101839934",
  appId: "1:161101839934:web:a41bfdf348f55ce10e9b6f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore (app)