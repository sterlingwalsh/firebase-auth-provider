import React, { createContext, useEffect, useState } from 'react';

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
var firebaseConfig = {
  apiKey: 'AIzaSyBIv0rCZj9JaZSsRFhllShB6iFuy0M3pC4',
  authDomain: 'game-vault-cf6f1.firebaseapp.com',
  databaseURL: 'https://game-vault-cf6f1.firebaseio.com',
  projectId: 'game-vault-cf6f1',
  storageBucket: '',
  messagingSenderId: '221653759720',
  appId: '1:221653759720:web:82d2c02ce80e04b9'
};
// var num = process.env.REACT_APP_NUM;

export const FirebaseContext = createContext({});

const FirebaseProvider = ({ children, firestore, auth, ...otherProps }) => {
  console.log('render firebase');
  const [FunctionProvider, setFunctionProvider] = useState();
  useEffect(() => {
    let fullProvider = children;
    const importPromises = [];
    if (auth) {
      importPromises.push(
        import('./auth.provider').then(authProvider => {
          fullProvider = addProvider(fullProvider, authProvider.default);
        })
      );
    }

    // if (firestore){
    //   import('firebase/firestore').then(firestoreProvider =>
    //     addProvider(fullProvider, firestoreProvider)
    //   );}
    Promise.all(importPromises).then(() => {
      firebase.initializeApp(firebaseConfig);
      setFunctionProvider(fullProvider);
    });
  }, [children, auth, firestore]);
  return (
    <FirebaseContext.Provider value={{ firebase }}>
      {FunctionProvider ? FunctionProvider : children}
    </FirebaseContext.Provider>
  );
};

const addProvider = (children, Provider) => (
  <Provider firebase={firebase}>{children}</Provider>
);

export default FirebaseProvider;
