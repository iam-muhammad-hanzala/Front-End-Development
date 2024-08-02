// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBk9EIXVq6bdcFE42CMEB4MMU6x0tmwduE",
  authDomain: "pwagram-1410e.firebaseapp.com",
  databaseURL: "https://pwagram-1410e.firebaseio.com",
  projectId: "pwagram-1410e",
  storageBucket: "pwagram-1410e.appspot.com",
  messagingSenderId: "186092825798",
  appId: "1:186092825798:web:e69b8900dfca462a6a3bc7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
