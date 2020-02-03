import firebase from 'firebase/app'
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDXmfNyRDMJP5XR7Rt88Dx1BLzwT3umSDQ",
  authDomain: "expresses-5110a.firebaseapp.com",
  databaseURL: "https://expresses-5110a.firebaseio.com",
  projectId: "expresses-5110a",
  storageBucket: "expresses-5110a.appspot.com",
  messagingSenderId: "852707514413",
  appId: "1:852707514413:web:c7fda9ba68bb09af7340a4",
  measurementId: "G-FXYB1PEHES"
};

firebase.initializeApp(config)