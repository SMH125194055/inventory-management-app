// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAnalytics, isSupported } from 'firebase/analytics';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmlq1nBN9L7Pzt5Ymh80tAtL3omXkeEWU",
  authDomain: "headstartarproject.firebaseapp.com",
  projectId: "headstartarproject",
  storageBucket: "headstartarproject.appspot.com",
  messagingSenderId: "337433139413",
  appId: "1:337433139413:web:e241af906a6dd3399bea5c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

let analytics;
if (typeof window !== 'undefined') {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

export { firestore, analytics };
