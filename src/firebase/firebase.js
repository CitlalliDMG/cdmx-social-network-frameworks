// Firebase configuration and initialize file

import firebase from 'firebase/app';
// Initialize the auth object
import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyALLw_bBCaxUM0TD7PMa9_L2xZ4FLx6pwg",
    authDomain: "pseudogram-f3149.firebaseapp.com",
    databaseURL: "https://pseudogram-f3149.firebaseio.com",
    projectId: "pseudogram-f3149",
    storageBucket: "pseudogram-f3149.appspot.com",
    messagingSenderId: "566775694569"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
    db,
    auth,
    firebase,
};