// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXO4-4i_OjhmiEDc8Pf26dgvCB-LYHOQw",
  authDomain: "ema-john-simple-903ce.firebaseapp.com",
  projectId: "ema-john-simple-903ce",
  storageBucket: "ema-john-simple-903ce.appspot.com",
  messagingSenderId: "790794850049",
  appId: "1:790794850049:web:72c6e670e075bc6a47d500"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;