import React, { createContext, useContext } from 'react';
import('firebase/firestore');

export const FirestoreContext = createContext();

export const useFirestore = () => useContext(FirestoreContext);

export const FirestoreProvider = ({ firebase, children }) => {
  const firestoreValue = useFirestoreProvider(firebase);
  return (
    <FirestoreContext.Provider value={firestoreValue}>
      {children}
    </FirestoreContext.Provider>
  );
};

export const useFirestoreProvider = firebase => {};
