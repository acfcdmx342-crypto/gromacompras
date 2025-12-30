// firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  set,
  get,
  child,
  onValue,
  remove
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";

/* ================= CONFIGURACIÓN ================= */
const firebaseConfig = {
  apiKey: "AIzaSyDakM1BpK2EF8QrMcurDVodrG8LhVbtydo",
  authDomain: "mydbu-fbc33.firebaseapp.com",
  databaseURL: "https://mydbu-fbc33-default-rtdb.firebaseio.com",
  projectId: "mydbu-fbc33",
  storageBucket: "mydbu-fbc33.appspot.com",
  messagingSenderId: "3794457198",
  appId: "1:3794457198:web:b591c3bdfbb06f1cf54c7f"
};

/* ================= INICIALIZAR ================= */
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

/* ================= EXPORTAR ================= */
export {
  database,
  ref,
  push,
  set,
  get,
  child,
  onValue,
  remove
};
