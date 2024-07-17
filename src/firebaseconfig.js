// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoRrqjUS0IQrY_wfIKBFaWCDecsSOWigU",
  authDomain: "fir-firestore-bbc1c.firebaseapp.com",
  projectId: "fir-firestore-bbc1c",
  storageBucket: "fir-firestore-bbc1c.appspot.com",
  messagingSenderId: "45804231143",
  appId: "1:45804231143:web:1394190d64cb7ecc76c542",
  measurementId: "G-6JLKKJ42BT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;