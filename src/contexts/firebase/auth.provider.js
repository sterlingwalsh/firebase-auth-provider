import React, { createContext, useCallback } from 'react';
import 'firebase/auth';

export const AuthContext = createContext({
  createUserWithEmailAndPassword: () => {},
  signInWithEmailAndPassword: () => {},
  setOnAuthStateChanged: () => {},
  signOut: () => {}
});

const AuthProvider = ({ children, firebase }) => {
  console.log('render auth');
  const setOnAuthStateChanged = useCallback(
    cb => {
      if (cb) {
        firebase.auth().onAuthStateChanged(cb);
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

  return (
    <AuthContext.Provider
      value={{
        createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        setOnAuthStateChanged,
        signOut
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
