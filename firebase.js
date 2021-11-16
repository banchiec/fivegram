// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDIorRPnuVi97v2DeOZXXZp8ZGQterYp7k",
    authDomain: "fivegram-a2a6f.firebaseapp.com",
    projectId: "fivegram-a2a6f",
    storageBucket: "fivegram-a2a6f.appspot.com",
    messagingSenderId: "388589561878",
    appId: "1:388589561878:web:10fc6a98d8fe089f3fed37"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore()
const storage = getStorage()

export { app, db, storage }