import React, { createContext } from 'react';

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from 'firebase/app';

// Add the Firebase services that you want to use
import 'firebase/auth';
import 'firebase/firestore';

// TODO: Replace the following with your app's Firebase project configuration
var firebaseConfig = process.env.FIREBASE_CONFIG;

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const FirebaseAuthContext = createContext({});

const FirebaseAuthProvider = ({ children, ...otherProps }) => (
  <FirebaseAuthContext.Provider value={{}}>
    {children}
  </FirebaseAuthContext.Provider>
);

export default FirebaseAuthProvider;
