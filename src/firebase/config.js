import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyDLAhq_RMI7pbpmwEMT3f1E7iKg8isIK9Q",
    authDomain: "souhaib-gallery.firebaseapp.com",
    databaseURL: "https://souhaib-gallery.firebaseio.com",
    projectId: "souhaib-gallery",
    storageBucket: "souhaib-gallery.appspot.com",
    messagingSenderId: "117627668730",
    appId: "1:117627668730:web:dc6cc8daacc2ea3ec8a143",
    measurementId: "G-FN6GDZQF6R"
};

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFireStore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {projectStorage, projectFireStore, timestamp};