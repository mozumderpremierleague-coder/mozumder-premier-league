// Firebase Configuration
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA0i1-gPPc6gG2CEjIrf_RB0rPDub_DNJI",
  authDomain: "mozumder-premier-league.firebaseapp.com",
  projectId: "mozumder-premier-league",
  storageBucket: "mozumder-premier-league.firebasestorage.app",
  messagingSenderId: "538591986343",
  appId: "1:538591986343:web:5bff3cbfb0acca46271182",
  measurementId: "G-0ZZLWQ9Z87"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
