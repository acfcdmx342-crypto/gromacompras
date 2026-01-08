import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  set,
  get,
  onValue,
  remove,
  update
  query,        
  orderByChild, 
  equalTo      
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDakM1BpK2EF8QrMcurDVodrG8LhVbtydo",
  authDomain: "mydbu-fbc33.firebaseapp.com",
  databaseURL: "https://mydbu-fbc33-default-rtdb.firebaseio.com",
  projectId: "mydbu-fbc33",
  storageBucket: "mydbu-fbc33.appspot.com",
  messagingSenderId: "3794457198",
  appId: "1:3794457198:web:b591c3bdfbb06f1cf54c7f"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export {
  database,
  ref,
  push,
  set,
  get,
  onValue,
  remove,
  update,
  query,        // <--- Agregar esta
  orderByChild, // <--- Agregar esta
  equalTo       // <--- Agregar esta (La que falta)
};
