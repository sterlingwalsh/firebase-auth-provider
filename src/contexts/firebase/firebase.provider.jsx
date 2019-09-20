import React from 'react';

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from 'firebase/app';

import { AuthProvider } from './auth.provider';
import { FirestoreProvider } from './firestore.provider';

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
firebase.initializeApp(firebaseConfig);

const FirebaseProvider = ({ children, ...otherProps }) => {
  console.log('render firebase');
  return (
    <AuthProvider firebase={firebase}>
      <FirestoreProvider firebase={firebase}>{children}</FirestoreProvider>
    </AuthProvider>
  );
};

export default FirebaseProvider;
