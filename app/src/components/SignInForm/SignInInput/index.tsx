import React, { useState } from 'react';
import styled from 'styled-components';
import { TextField } from '@mui/material';

// hooks
import useInput from '../../../hooks/useInput';

const InputWrap = styled.div`
  flex: 0.5;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: ${(props) => props.theme.signin.boxShadow};
  background-color: white;
  border-radius: ${(props) => props.theme.signin.borderRadius};
  padding: ${(props) => props.theme.signin.padding};
`;
const InputForm = styled.form`
  width: 100%;
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* background-color: yellow; */
`;

const InputField = styled(TextField)`
  margin-bottom: 30px;
  color: white;
  width: 80%;
`;
const LoginButton = styled.button`
  width: 80%;
  margin-top: 20px;
  padding: 10px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${(props) => props.theme.signin.borderRadius};
  background-color: blue;
  color: white;
  font-weight: 900;
  cursor: pointer;
  transition: 0.2s ease-in;
  &:hover {
    background-color: #e384a4;
  }
`;
// types
type MyFormProps = {
  onSubmit: (form: { email: string; password: string }) => void;
};

export default function SignInInput({ onSubmit }: MyFormProps) {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const { email, password } = form;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(form);
    setForm({
      email: '',
      password: ''
    }); // 초기화
  };
  return (
    <InputWrap>
      <InputForm onSubmit={handleSubmit}>
        <InputField
          required
          id='standard-required'
          label='Email'
          variant='standard'
          name='email'
          value={email}
          onChange={onChange}
          placeholder='Type your email'
        />
        <InputField
          required
          id='standard-required'
          label='Password'
          variant='standard'
          name='password'
          value={password}
          onChange={onChange}
          placeholder='Type your password'
          type='password'
        />
        <LoginButton type='submit'>SIGN IN</LoginButton>
      </InputForm>
    </InputWrap>
  );
}
