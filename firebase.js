
// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyDakM1BpK2EF8QrMcurDVodrG8LhVbtydo",
  authDomain: "mydbu-fbc33.firebaseapp.com",
  projectId: "mydbu-fbc33",
  storageBucket: "mydbu-fbc33.firebasestorage.app",
  messagingSenderId: "3794457198",
  appId: "1:3794457198:web:b591c3bdfbb06f1cf54c7f",
  measurementId: "G-NXX5XDXYWB",
  databaseURL: "https://mydbu-fbc33-default-rtdb.firebaseio.com"
};

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.database();
