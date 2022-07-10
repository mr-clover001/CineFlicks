import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOvn5v3HoX4kV8DM4C_M95OABu7O01r-A",
  authDomain: "cineflicks-2d97e.firebaseapp.com",
  projectId: "cineflicks-2d97e",
  storageBucket: "cineflicks-2d97e.appspot.com",
  messagingSenderId: "728405248883",
  appId: "1:728405248883:web:6159f9255a91bfb2829306",
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
