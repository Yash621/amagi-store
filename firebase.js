// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCU51VANamYq05ejB5tG84Ing61c0kV_WA",
  authDomain: "amagi-store.firebaseapp.com",
  projectId: "amagi-store",
  storageBucket: "amagi-store.appspot.com",
  messagingSenderId: "489485790147",
  appId: "1:489485790147:web:d55f84bdb617cdbe6eeb76",
  measurementId: "G-YFDS3735SC",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
const db = app.firestore();

export default db;
