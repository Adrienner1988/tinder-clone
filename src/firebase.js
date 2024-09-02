import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "tinder-clone-37f6c.firebaseapp.com",
  projectId: "tinder-clone-37f6c",
  storageBucket: "tinder-clone-37f6c.appspot.com",
  messagingSenderId: "912032926413",
  appId: process.env.REACT_APP_API_ID,
  measurementId: "G-LFHJTK6ECN",
};

const app = initializeApp(firebaseConfig);
const database = getFirestore(app);

export {database};

