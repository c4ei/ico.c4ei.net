import firebase from "firebase"

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FirbaseAPIkey,
  authDomain: "ico-c4ei-net.firebaseapp.com",
  projectId: "ico-c4ei-net",
  storageBucket: "ico-c4ei-net.appspot.com",
  messagingSenderId: "17022995359",
  appId: "1:17022995359:web:37c2a2c559fa3a35260baa",
  measurementId: "G-4GZMNXKR4S"
};

const app = firebase.initializeApp(firebaseConfig);

export default app;
