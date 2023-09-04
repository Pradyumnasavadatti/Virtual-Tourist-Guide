import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyB6QQsqAQG6Y0Eds47o3fPeOT2x6X6aaHM",
  authDomain: "virtual-tou.firebaseapp.com",
  databaseURL:
    "https://virtual-tou-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "virtual-tou",
  storageBucket: "virtual-tou.appspot.com",
  messagingSenderId: "755075563178",
  appId: "1:755075563178:web:1557cf19b7480ff2665ad3",
  measurementId: "G-KCEQGPK24G",
};

const app = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = app.auth();
export const storage = app.firestore();
export default app;
