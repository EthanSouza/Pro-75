import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAwuSkGeCAbE3FZ1riAQfZBgdneirWG6uw",
  authDomain: "ciclista-eletronico-4c172.firebaseapp.com",
  projectId: "ciclista-eletronico-4c172",
  storageBucket: "ciclista-eletronico-4c172.appspot.com",
  messagingSenderId: "255394215204",
  appId: "1:255394215204:web:5ddfbb0e930fc2aae42fb1"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
