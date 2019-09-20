import React, {
  useCallback,
  useContext,
  useEffect,
  useState,
  useRef
} from 'react';

import { useAuth } from '../contexts/firebase/auth.provider';

import {
  ButtonContainer,
  Button,
  MainContainer,
  Form,
  Input
} from './login.styles';

const SignIn = () => {
  const {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    setOnAuthStateChanged,
    signOut
  } = useAuth();

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
    <MainContainer>
      <Form>
        <Input
          type='email'
          placeholder='Email'
          onChange={evt => setEmail(evt.target.value)}
        ></Input>
        <Input
          type='password'
          placeholder='Password'
          onChange={evt => setPassword(evt.target.value)}
        ></Input>
      </Form>
      <ButtonContainer>
        {loginMethods.map(({ name, signIn, signUp }, index) => (
          <React.Fragment key={index}>
            <Button onClick={signIn}>{`Sign In with ${name}`}</Button>

            <Button onClick={signUp}>{`Sign Up with ${name}`}</Button>
          </React.Fragment>
        ))}
      </ButtonContainer>
      <Button onClick={signOut}>{`Sign Out`}</Button>
    </MainContainer>
  );
};

export default SignIn;
