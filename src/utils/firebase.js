import firebase from "firebase/app";
import "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD7vU10KUKxfgbVkmBAJJbqvDP48Z1BiEM",
  authDomain: "carteonline-15fef.firebaseapp.com",
  databaseURL: "https://carteonline-15fef.firebaseio.com",
  projectId: "carteonline-15fef",
  storageBucket: "carteonline-15fef.appspot.com",
  messagingSenderId: "25645030718",
  appId: "1:25645030718:web:263d20f6756ffba1"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
