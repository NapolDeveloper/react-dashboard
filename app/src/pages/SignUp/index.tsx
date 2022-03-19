import React from 'react';
import styled from 'styled-components';
import SignUpForm from '../../components/SignUpForm';

// components

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function SignUp() {
  return (
    <Container>
      <SignUpForm />
    </Container>
  );
}
