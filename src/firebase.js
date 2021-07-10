import firebase from "firebase/app";
import "firebase/storage";
require('dotenv').config();

console.log(process.env);

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "my-music-journey.firebaseapp.com",
  databaseURL: "https://my-music-journey.firebaseio.com",
  projectId: "my-music-journey",
  storageBucket: "my-music-journey.appspot.com",
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
