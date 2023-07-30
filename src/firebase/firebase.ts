// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnE19VQ3Bbkf9hgLQbpZ01vw8w3Vpj5KI",
  authDomain: "dental-mngt.firebaseapp.com",
  // authDomain: "localhost:5173/",
  projectId: "dental-mngt",
  storageBucket: "dental-mngt.appspot.com",
  messagingSenderId: "463557927177",
  appId: "1:463557927177:web:6bfa2979252bb7b17933d8",
  measurementId: "G-P85L76MQES"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth: any = getAuth(app)