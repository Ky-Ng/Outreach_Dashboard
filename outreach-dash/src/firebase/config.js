import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// TODO add in the code for using google or email magic link
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDQyPCfmtUkQ70XPzcByeu51fdlI_r-5dA",
    authDomain: "outreach-dash.firebaseapp.com",
    projectId: "outreach-dash",
    storageBucket: "outreach-dash.appspot.com",
    messagingSenderId: "1060044447635",
    appId: "1:1060044447635:web:37e25768831d7533871266",
    measurementId: "G-6ETTDL48LL"
  };

  //init firesbase
  firebase.initializeApp(firebaseConfig)

  const projectAuth = firebase.auth()
  const projectFirestore = firebase.firestore()
  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export {projectAuth, projectFirestore, timestamp}