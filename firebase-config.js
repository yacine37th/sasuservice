// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC8F6r8xQpPzUYDMDFdjYTa5rp1ubBFfpM",
    authDomain: "sasuservice-33035.firebaseapp.com",
    projectId: "sasuservice-33035",
    storageBucket: "sasuservice-33035.appspot.com",
    messagingSenderId: "151123513706",
    appId: "1:151123513706:web:792a7b0b429628f4c09513"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };