// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfTDEA3t9oEDb68k6Jg56IZF2F7NYbSe4",
  authDomain: "fashion-mart-6b696.firebaseapp.com",
  projectId: "fashion-mart-6b696",
  storageBucket: "fashion-mart-6b696.appspot.com",
  messagingSenderId: "308455262435",
  appId: "1:308455262435:web:18cb20462944dcc7279dd6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;