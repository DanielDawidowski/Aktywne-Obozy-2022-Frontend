import firebase from "firebase/app";
import "firebase/auth";
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBbbAjEYlXsplR5FMvdal8aqvunGAqc4p0",
    authDomain: "boilerplate-redux-1ea40.firebaseapp.com",
    projectId: "boilerplate-redux-1ea40",
    storageBucket: "boilerplate-redux-1ea40.appspot.com",
    messagingSenderId: "986742822829",
    appId: "1:986742822829:web:c1e6052a1e1a35f80d3324",
    measurementId: "G-XDJ9DVY204"
  };
  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();