import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyA2_p0ygGtdzxIzYwNOQ8v27d1M1SPwOOQ",
    authDomain: "uploadimage-reactjs.firebaseapp.com",
    databaseURL: "https://uploadimage-reactjs.firebaseio.com",
    projectId: "uploadimage-reactjs",
    storageBucket: "uploadimage-reactjs.appspot.com",
    messagingSenderId: "160927109306",
    appId: "1:160927109306:web:cac7d3e62c3f4920bab283",
    measurementId: "G-F2XTB9T9X2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default Firebase