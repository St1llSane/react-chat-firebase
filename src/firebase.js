import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAenTpRpVKVQK21uv_Yvc1NLK_nP-DIIBQ",
  authDomain: "react-chat-a265a.firebaseapp.com",
  projectId: "react-chat-a265a",
  storageBucket: "react-chat-a265a.appspot.com",
  messagingSenderId: "297333191542",
  appId: "1:297333191542:web:9b1df3bca3fe6805398057"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()