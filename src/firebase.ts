import * as firebase from "firebase/app";

import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyCQ0Cxt608zQvCdtzpzl51MAkIb-WP4NP4",
  authDomain: "quired-fm.firebaseapp.com",
  databaseURL: "https://quired-fm.firebaseio.com",
  projectId: "creative-sample-host",
  storageBucket: "creative-sample-host.appspot.com",
  messagingSenderId: "814597161585",
  appId: "1:814597161585:web:999fc902fd1585360011d0",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const google = new firebase.auth.GoogleAuthProvider();

export { auth, google };
