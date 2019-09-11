import React from 'react';

import SignIn from './components/login.component';

import FirebaseProvider from './contexts/firebase/firebase.provider';

function App() {
  return (
    <div className='App'>
      <FirebaseProvider>
        <SignIn />
      </FirebaseProvider>
    </div>
  );
}

export default App;
