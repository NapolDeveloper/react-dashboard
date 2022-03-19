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
    console.log(form);
    // axios로 서버와 통신
  };
  return (
    <Container>
      <SignInInput onSubmit={onSubmit} />
    </Container>
  );
}
