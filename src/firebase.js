import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAZ71P7eH941a6MZP75YYfVTEWkItGhFK8",
  authDomain: "travolo-240dd.firebaseapp.com",
  projectId: "travolo-240dd",
  storageBucket: "travolo-240dd.appspot.com",
  messagingSenderId: "593832133598",
  appId: "1:593832133598:web:7cad3189a4a7e058d5534f",
  measurementId: "G-9N2ZELG6ZW"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;