import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB_MIYMSFSumeMTTZytAS8llaVUpoJ68Fs",
  authDomain: "linkedin-clone-bb9e7.firebaseapp.com",
  projectId: "linkedin-clone-bb9e7",
  storageBucket: "linkedin-clone-bb9e7.appspot.com",
  messagingSenderId: "68105857511",
  appId: "1:68105857511:web:bfe251d27396610bb9b542",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
