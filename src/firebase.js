import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyArl8d3YI5GbTiIFlCjfuYrFA2dbRPn0f0",
  authDomain: "data-form-6e26b.firebaseapp.com",
  databaseURL: "https://data-form-6e26b-default-rtdb.firebaseio.com",
  projectId: "data-form-6e26b",
  storageBucket: "data-form-6e26b.appspot.com",
  messagingSenderId: "559067082563",
  appId: "1:559067082563:web:aff74dc877c4f1386889f6",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getDatabase(app);
