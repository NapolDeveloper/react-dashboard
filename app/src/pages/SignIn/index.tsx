import React from 'react';
import styled from 'styled-components';
import SignInForm from '../../components/SignInForm/SignInForm';

// components

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function SignIn() {
  return (
    <Container>
      <SignInForm />
    </Container>
  );
}
