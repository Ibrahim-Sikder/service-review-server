// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJAFwkPlWM3gHrOBWhtoChDJ7q5Gy4O6M",
  authDomain: "food-service-cb0bf.firebaseapp.com",
  projectId: "food-service-cb0bf",
  storageBucket: "food-service-cb0bf.appspot.com",
  messagingSenderId: "1010645823285",
  appId: "1:1010645823285:web:340e05e2f65520253ba67c",
  measurementId: "G-GTVHYKPKJ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);