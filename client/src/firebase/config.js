// Import the functions you need from the SDKs you need
import { getStorage } from "@firebase/storage";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPHflMVwCR6oOIakcyHciaLn1a1fevCxQ",
  authDomain: "album-9c412.firebaseapp.com",
  projectId: "album-9c412",
  storageBucket: "album-9c412.appspot.com",
  messagingSenderId: "133848098540",
  appId: "1:133848098540:web:450a5574a2a1715cbca7c9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export default storage;
