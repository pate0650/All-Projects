
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDdtbyEc19XT4hl9CK28csW_xltjljwetE",
    authDomain: "projects-firestore.firebaseapp.com",
    databaseURL: "https://projects-firestore.firebaseio.com",
    projectId: "projects-firestore",
    storageBucket: "projects-firestore.appspot.com",
    messagingSenderId: "107526336624",
    appId: "1:107526336624:web:06ea50673ebba6dada04b5",
    measurementId: "G-1M91G8Y4Y9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  
const db = firebase.firestore();
