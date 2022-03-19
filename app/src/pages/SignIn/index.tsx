import React from 'react';
import styled from 'styled-components';
import SignInForm from '../../components/SignInForm/SignInForm';

// components

const Container = styled.div`
  width: 100%;
`;

export default function SignIn() {
  return (
    <Container>
      <SignInForm />
    </Container>
  );
}
