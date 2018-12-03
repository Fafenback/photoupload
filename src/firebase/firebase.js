
import firebase from 'firebase';
import Rebase from 're-base'
const config = {
    apiKey: "AIzaSyAXg72FBOkS7Z8u8dMWbpwtt9gIV3jYbMk",
    authDomain: "photoupload-b5452.firebaseapp.com",
    databaseURL: "https://photoupload-b5452.firebaseio.com",
    projectId: "photoupload-b5452",
    storageBucket: "photoupload-b5452.appspot.com",
    messagingSenderId: "316436790920"
  };
const app = firebase.initializeApp(config);
const auth = firebase.auth();
const base = Rebase.createClass(app.database())
const storageRef = firebase.storage().ref()

export { auth, base, storageRef };