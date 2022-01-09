import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDnzzE50oKQPOlxslDxaO5M85TigieGts",
  authDomain: "dev-interview-rethink.firebaseapp.com",
  projectId: "dev-interview-rethink",
  storageBucket: "dev-interview-rethink.appspot.com",
  messagingSenderId: "751386025719",
  appId: "1:751386025719:web:6b4282290fe5ae0379fdf2",
  measurementId: "G-Q4CYFTHJL2",
};

export const firebaseApp = initializeApp(firebaseConfig);

// FIRERBASE DATA BASE
export const DATABASE = getFirestore(firebaseApp);
