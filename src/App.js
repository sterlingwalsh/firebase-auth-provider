import React from 'react';

import SignIn from './components/login.component';

import FirebaseAuthProvider from './contexts/firebase/auth.provider';

function App() {
  return (
    <div className='App'>
      <FirebaseAuthProvider>
        <SignIn />
      </FirebaseAuthProvider>
    </div>
  );
}

export default App;
