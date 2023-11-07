
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   apiKey: "AIzaSyAhkswSGKluHmuCGkIGSmW4Bt0SmscoP8k",
  authDomain: "com-cds-database.firebaseapp.com",
  projectId: "com-cds-database",
  storageBucket: "com-cds-database.appspot.com",
  messagingSenderId: "656623906644",
  appId: "1:656623906644:web:33f7f986bcfae8763ca2c1",
  measurementId: "G-4YKQJTNS62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
