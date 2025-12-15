
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyDakM1BpK2EF8QrMcurDVodrG8LhVbtydo",
  authDomain: "mydbu-fbc33.firebaseapp.com",
  projectId: "mydbu-fbc33",
  storageBucket: "mydbu-fbc33.firebasestorage.app",
  messagingSenderId: "3794457198",
  appId: "1:3794457198:web:b591c3bdfbb06f1cf54c7f"
};

export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const storage = getStorage(app);
