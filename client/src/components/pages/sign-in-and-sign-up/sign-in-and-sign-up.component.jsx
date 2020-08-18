import React from 'react';

import SignIn from '../../sign-in/sign-in.component';

import { Container } from './sign-in-and-sign-up.styles';
import SignUp from '../../sign-up/sign-up.component';

const SignInAndSignUp = () => (
  <Container>
    <SignIn />
    <SignUp />
  </Container>
);

export default SignInAndSignUp;
