import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBNZlMgCbcsbDfymr6MRiKH1f2a5ArarK8",
    authDomain: "cv-generator-b95fc.firebaseapp.com",
    databaseURL: "https://cv-generator-b95fc.firebaseio.com",
    projectId: "cv-generator-b95fc",
    storageBucket: "cv-generator-b95fc.appspot.com",
    messagingSenderId: "988167849186"
  };

  firebase.initializeApp(config);

export const cvs = firebase.database().ref('cvs/');
export const auth = firebase.auth();
export const storage = firebase.storage().ref('userPhotos/')
  