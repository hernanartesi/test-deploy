// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import {getAuth, GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBgO82Jv8uMici5Ksj_CgOye89aq4AmcGs",
  authDomain: "login-clase7-uade.firebaseapp.com",
  projectId: "login-clase7-uade",
  storageBucket: "login-clase7-uade.appspot.com",
  messagingSenderId: "954208184296",
  appId: "1:954208184296:web:2e7997227090f87b45a65d",
  measurementId: "G-NQLWHZH088"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);