// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDG6olK95_FbUSURT3HbbpCt8dFS1J9RmU",
  authDomain: "authenication-57d10.firebaseapp.com",
  projectId: "authenication-57d10",
  storageBucket: "authenication-57d10.firebasestorage.app",
  messagingSenderId: "538938250526",
  appId: "1:538938250526:web:2ac5a7f817e8ad0637250f",
  measurementId: "G-4EZBGX1HKN"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

