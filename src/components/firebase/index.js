import firebase from 'firebase';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyBdZluu1m4r-gOfIxYZ14mkPZxbj8t9C_8",

  authDomain: "daredream-72c45.firebaseapp.com",

  projectId: "daredream-72c45",

  storageBucket: "daredream-72c45.appspot.com",

  messagingSenderId: "1392770352",

  appId: "1:1392770352:web:338b0bb300bb7deb795cf5",

  measurementId: "G-0R3V6WJPC7"

};

  const firebaseSApp = firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
   const db = firebaseSApp.firestore();
   const provider = new firebase.auth.GoogleAuthProvider();
   const facebookProvider = new firebase.auth.FacebookAuthProvider();
   const TwitterProvider = new firebase.auth.TwitterAuthProvider();
   const GithubProvider = new firebase.auth.GithubAuthProvider();

   const storage = firebase.storage();
  export default {auth, db, storage};
  export  {db, provider, facebookProvider, TwitterProvider,GithubProvider};
  export  {auth};
  export  {storage};