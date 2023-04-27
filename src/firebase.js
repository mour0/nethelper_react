// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXm778QQrr18QqkK2Jap65UK5U4FRl8Gk",
  authDomain: "nethelper-web.firebaseapp.com",
  projectId: "nethelper-web",
  storageBucket: "nethelper-web.appspot.com",
  messagingSenderId: "139123462110",
  appId: "1:139123462110:web:9481ced635db434731574f",
};

// Default auth persistence: Local

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
