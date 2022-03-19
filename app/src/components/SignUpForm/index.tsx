import React from 'react';
import SignUpInput from './SignUpInput';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function SignUpForm() {
  const onSubmit = (form: {
    email: string;
    password: string;
    confirmPassword: string;
    name: string;
  }) => {
    console.log(form);
    // axios로 서버와 통신
  };
  return (
    <Container>
      <SignUpInput onSubmit={onSubmit} />
    </Container>
  );
}
