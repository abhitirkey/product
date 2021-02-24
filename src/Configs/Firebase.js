import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCbRgEmuttqKM3H5zLG93GtY97OwmplIWk",
    authDomain: "tyutee-demo.firebaseapp.com",
    projectId: "tyutee-demo",
    storageBucket: "tyutee-demo.appspot.com",
    messagingSenderId: "943134209622",
    appId: "1:943134209622:web:87bab7808bc4deaa166df7",
    measurementId: "G-TXERV8NTR4"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider}
  export default db