import firebase from 'firebase'
import 'firebase/storage'
import 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCbRgEmuttqKM3H5zLG93GtY97OwmplIWk",
    authDomain: "tyutee-demo.firebaseapp.com",
    databaseURL: "https://tyutee-demo.firebaseio.com",
    projectId: "tyutee-demo",
    storageBucket: "tyutee-demo.appspot.com",
    messagingSenderId: "943134209622",
    appId: "1:943134209622:web:87bab7808bc4deaa166df7",
    measurementId: "G-TXERV8NTR4"
  };

  firebase.initializeApp(firebaseConfig);
  const projectStorage = firebase.storage();
  const db = firebase.firestore();

  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
 
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {auth, provider, projectStorage, timestamp}
  export default db