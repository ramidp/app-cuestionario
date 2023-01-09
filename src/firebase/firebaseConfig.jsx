// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth} from "firebase/auth";


const firebaseConfig = {

apiKey: "AIzaSyDNo1nHWEUK-i7WkXJwxZjNnXvcBQs55Ug",
authDomain: "estetica-app-ac4c7.firebaseapp.com",
projectId: "estetica-app-ac4c7",
storageBucket: "estetica-app-ac4c7.appspot.com",
messagingSenderId: "279681423498",
appId: "1:279681423498:web:40cbd78ed56ab654e93573",
measurementId: "G-C0H4NXFVFE"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {db, auth};