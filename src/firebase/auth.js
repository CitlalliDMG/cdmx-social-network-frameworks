// File to authentication services from Firebae
// Interface between Firebase API and the app

import { auth, firebase, db } from './firebase';
import * as routes from '../constants/routes';

// Sign Up function
export const doCreateUserWithEmailAndPassword = (email, password) =>
    auth.createUserWithEmailAndPassword(email, password);

// Sign In function
export const doSignInWithEmailAndPassword = (email, password) =>
    auth.signInWithEmailAndPassword(email, password);

// Sign Out function
export const doSignOut = () =>
    auth.signOut();

// Password Reset
export const doPasswordReset = (email) =>
    auth.sendPasswordResetEmail(email);

// Password Change
export const doPasswordUpdate = (password) =>
    auth.currentUser.updatePassword(password);

// Sign in Google
export const doSignInWithGoogle = async (history) => {
    const provider = new firebase.auth.GoogleAuthProvider();
    await auth.signInWithPopup(provider);
    history.push(routes.HOME);
};

// State listener
export const authStateChangeListener = auth.onAuthStateChanged((user) => {
    console.log(user);
    console.log(db);
    
        db.ref(`users/${user.uid}`).set({
            username: user.displayName,
            email: user.email,
        });
        // return user;
    });
