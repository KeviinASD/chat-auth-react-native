// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import AsyncStorage from "@react-native-async-storage/async-storage"
import { getAuth, getReactNativePersistence, initializeAuth  } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {ReactNativeAsyncStorage} from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgTHRMQ9ZjZcccStCtibO1OUT4u1Hf2aE",
  authDomain: "fir-chat-3a6b6.firebaseapp.com",
  projectId: "fir-chat-3a6b6",
  storageBucket: "fir-chat-3a6b6.firebasestorage.app",
  messagingSenderId: "581932337702",
  appId: "1:581932337702:web:11a262fd81c2675e2974e7"
};

// Initialize Firebase
const app = getApps.length>0 ? getApp : initializeApp(firebaseConfig);
const firebaseAuth = getAuth(app)
const firestoreDB = getFirestore(app) 

const userRef = collection(firestoreDB, 'users')
const roomRef = collection(firestoreDB, 'rooms')

export {app, firebaseAuth, firestoreDB};