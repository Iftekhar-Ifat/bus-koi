// Import the functions you need from the SDKs you need
import * as firebase from 'firebase';
import {getDatabase} from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5u-CLg21gsaDuklGF5HADIm4_X48houg",
  authDomain: "buskoi-139d9.firebaseapp.com",
  databaseURL: "https://buskoi-139d9-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "buskoi-139d9",
  storageBucket: "buskoi-139d9.appspot.com",
  messagingSenderId: "957487442662",
  appId: "1:957487442662:web:9865b6752eef5dede62927"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
}
else {
    app = firebase.app()
}

const auth = firebase.auth()

export { auth };

// export const db = getDatabase(app);

export const firebaseDatabse = firebase.database();