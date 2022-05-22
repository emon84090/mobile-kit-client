
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBIHS6SdE6LUGmE4bAm1gxDSpEsFhEhNzY",
    authDomain: "mobile-kit-79e33.firebaseapp.com",
    projectId: "mobile-kit-79e33",
    storageBucket: "mobile-kit-79e33.appspot.com",
    messagingSenderId: "418053566881",
    appId: "1:418053566881:web:ee38a8d33d5f3614999be0"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;