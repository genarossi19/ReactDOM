// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage, ref, uploadBytes} from 'firebase/storage'
import { v4 } from "uuid";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDto31t9kYC4cWfmtIG8mG0dujG-bm-VwI",
  authDomain: "react-firebase-1e173.firebaseapp.com",
  projectId: "react-firebase-1e173",
  storageBucket: "react-firebase-1e173.appspot.com",
  messagingSenderId: "10555739149",
  appId: "1:10555739149:web:e57fc4d89e92c95e0a5944"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)

export function uploadFile(file){
   const storageRef =  ref(storage, v4())
   uploadBytes(storageRef, file).then(snapshot=>{console.log(snapshot)})
}