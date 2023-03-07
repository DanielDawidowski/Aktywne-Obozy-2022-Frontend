import firebase from "firebase/app";
import "firebase/auth";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyA4wfIer1tGElfAS6UjqzTzW62cONZ1wRs",
  authDomain: "aktywne-obozy-new.firebaseapp.com",
  projectId: "aktywne-obozy-new",
  storageBucket: "aktywne-obozy-new.appspot.com",
  messagingSenderId: "1900302300",
  appId: "1:1900302300:web:a6767bfe710f7779004919",
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
