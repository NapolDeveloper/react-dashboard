import React from 'react';
import SignInInput from './SignInInput';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function SignInForm() {
  const onSubmit = (form: { email: string; password: string }) => {
    console.log(form.email);
    console.log(form.password);
  };
  return (
    <Container>
      <SignInInput onSubmit={onSubmit} />
    </Container>
  );
}
