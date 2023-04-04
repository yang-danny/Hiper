import {getAuth} from 'firebase/auth'
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

export const firebaseConfig = {
  apiKey: "AIzaSyAZIx9hNNzHJVkjFiIOfHVc2WSPzVmQiCY",
  authDomain: "hiper-bf706.firebaseapp.com",
  projectId: "hiper-bf706",
  storageBucket: "hiper-bf706.appspot.com",
  messagingSenderId: "775802512616",
  appId: "1:775802512616:web:46f07c6c76b9967108d55d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;