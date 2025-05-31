// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPJ58_6kG1FZ5VGumFaNwDaUTY-6ksVKM",
  authDomain: "simple-firebase-auth2-bfb75.firebaseapp.com",
  projectId: "simple-firebase-auth2-bfb75",
  storageBucket: "simple-firebase-auth2-bfb75.firebasestorage.app",
  messagingSenderId: "1072129160887",
  appId: "1:1072129160887:web:4e82ec0148782435cbff32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
 export const auth = getAuth(app);