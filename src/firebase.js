import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBASCZnR-iJWCV4tne73oZSo_HHQvzfxbY",
  authDomain: "my-music-journey.firebaseapp.com",
  databaseURL: "https://my-music-journey.firebaseio.com",
  projectId: "my-music-journey",
  storageBucket: "my-music-journey.appspot.com",
  messagingSenderId: "218567346610",
  appId: "1:218567346610:web:39edd366a43dac576a7cab",
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
