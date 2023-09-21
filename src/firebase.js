import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCFDb7dNz0xZD-UE4H3rZm4qDgS2Vki2NA",
  authDomain: "reactnative-b900a.firebaseapp.com",
  databaseURL:
    "https://reactnative-b900a-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "reactnative-b900a",
  storageBucket: "reactnative-b900a.appspot.com",
  messagingSenderId: "768971450478",
  appId: "1:768971450478:web:468092af0744fd22d65e7f",
  measurementId: "G-FXPVEE67FY",
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
const analytics = getAnalytics(app);
export const auth = getAuth(app);