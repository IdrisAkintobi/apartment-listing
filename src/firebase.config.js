// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAaewlglVv0omPV3Nw82e9NCnj8rODzi-g",
  authDomain: "apartment-listing-app.firebaseapp.com",
  projectId: "apartment-listing-app",
  storageBucket: "apartment-listing-app.appspot.com",
  messagingSenderId: "181676735180",
  appId: "1:181676735180:web:8a21cdba113d09f10ae069",
  measurementId: "G-BLBPJDS382",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
getAnalytics(app);
