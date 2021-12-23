import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDVBJdOuY2-YyCtIo3Hv4NDUAvnhMdQQDk",
  authDomain: "travolo-d4175.firebaseapp.com",
  projectId: "travolo-d4175",
  storageBucket: "travolo-d4175.appspot.com",
  messagingSenderId: "260026717678",
  appId: "1:260026717678:web:f684c29fee10419ed42aff",
  measurementId: "G-MV1VSS3DVN"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;