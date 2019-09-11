import React, { createContext, useEffect } from 'react';

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
var firebaseConfig = process.env.FIREBASE_CONFIG;

export const FirebaseContext = createContext({});

const FirebaseProvider = ({ children, firestore, auth, ...otherProps }) => {
  useEffect(() => {
    if (firestore) import('firebase/auth');
    if (auth) import('firebase/firestore');
    firebase.initializeApp(firebaseConfig);
  }, []);
  return (
    <FirebaseContext.Provider value={{ firebase }}>
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseProvider;
