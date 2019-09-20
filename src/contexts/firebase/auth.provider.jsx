import React, { createContext, useCallback, useContext, useState } from 'react';
import 'firebase/auth';

export const AuthContext = createContext({
  createUserWithEmailAndPassword: () => {},
  signInWithEmailAndPassword: () => {},
  setOnAuthStateChanged: () => {},
  signOut: () => {}
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children, firebase }) => {
  const auth = useAuthProvider(firebase);
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuthProvider = firebase => {
  console.log('render auth');

  const [user, setUser] = useState(null);
  const setOnAuthStateChanged = useCallback(
    cb => {
      if (cb) {
        firebase.auth().onAuthStateChanged(user => {
          setUser(user);
          cb(user);
        });
      }
    },
    [firebase]
  );

  const createUserWithEmailAndPassword = useCallback(
    (email, password) => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .catch(function(error) {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          // ...
        });
    },
    [firebase]
  );

  const signInWithEmailAndPassword = useCallback(
    (email, password) => {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch(function(error) {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          // ...
        });
    },
    [firebase]
  );

  const signOut = useCallback(() => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log('sign out success');
      })
      .catch(() => {
        console.log('sign out fail');
      });
  }, [firebase]);

  return {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    setOnAuthStateChanged,
    signOut,
    user
  };
};
