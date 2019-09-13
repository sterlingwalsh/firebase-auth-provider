import React, {
  useCallback,
  useContext,
  useEffect,
  useState,
  useRef
} from 'react';

import { AuthContext } from '../contexts/firebase/auth.provider';

const SignIn = () => {
  const {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    setOnAuthStateChanged,
    signOut
  } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const email = useRef('');
  // const password = useRef('');

  // const setEmail = useCallback((str) => email.current = str);
  // const setPassword = useCallback(str => password.current = str);

  useEffect(() => {
    setOnAuthStateChanged(user => {
      if (user) {
        console.log(user);
      } else {
        console.log('Signout');
      }
    });
  }, [setOnAuthStateChanged]);

  const loginMethods = [
    {
      name: 'Email',
      signIn: () => signInWithEmailAndPassword(email, password),
      signUp: () => createUserWithEmailAndPassword(email, password)
    },
    {
      name: 'Google',
      signIn: signInWithEmailAndPassword,
      signUp: createUserWithEmailAndPassword
    },
    {
      name: 'Facebook',
      signIn: signInWithEmailAndPassword,
      signUp: createUserWithEmailAndPassword
    },
    {
      name: 'Twitch',
      signIn: signInWithEmailAndPassword,
      signUp: createUserWithEmailAndPassword
    },
    {
      name: 'Discord',
      signIn: signInWithEmailAndPassword,
      signUp: createUserWithEmailAndPassword
    }
  ];

  return (
    <div>
      <input
        type='email'
        placeholder='Email'
        onChange={evt => setEmail(evt.target.value)}
      ></input>
      <input
        type='password'
        placeholder='Password'
        onChange={evt => setPassword(evt.target.value)}
      ></input>
      {loginMethods.map(({ name, signIn, signUp }, index) => (
        <div key={index}>
          <span>
            <button onClick={signIn}>{`Sign In with ${name}`}</button>
          </span>
          <span>
            <button onClick={signUp}>{`Sign Up with ${name}`}</button>
          </span>
        </div>
      ))}
      <button onClick={signOut}>{`Sign Out`}</button>
    </div>
  );
};

export default SignIn;
