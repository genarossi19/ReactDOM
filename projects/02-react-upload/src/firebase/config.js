// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDownloadURL, getStorage, ref, uploadBytes} from 'firebase/storage'
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


/**
 * Subir archivo al storage de firebase. Guarda en carpetas dependiendo si es image o audio
 * @param {File} file archivo a subir
 * @returns {Promise<string>}  url del archivo subido
 */
export async function uploadFile(file) {
    const fileType = file.type; // Obtén el tipo de archivo
 
    let folder;
    if (fileType.includes('audio')) {
       folder = 'audio';
    } else if (fileType.includes('image')) {
       folder = 'image';
    } else {
       // Tipo de archivo no reconocido
       console.error('Tipo de archivo no reconocido');
       return 0
    }
 
    const storageRef = ref(storage, `${folder}/${v4()}`);
    
    try {
       console.log('Subiendo:', file.name);
 
       const snapshot = await uploadBytes(storageRef, file);
 
       console.log('Subido', snapshot);
       console.log('Ruta completa:', snapshot.metadata.fullPath);
 
       const url = await getDownloadURL(storageRef);
 
       return url;
    } catch (error) {
       console.error('Error al subir el archivo:', error.message);
       
    }
 }