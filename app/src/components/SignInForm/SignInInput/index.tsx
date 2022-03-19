import React, { useState } from 'react';
import styled from 'styled-components';
import { TextField } from '@mui/material';

// hooks
import useInput from '../../../hooks/useInput';

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
  border-radius: 25px;
  background-color: blue;
  color: white;
  font-weight: 900;
  cursor: pointer;
  transition: 0.2s ease-in;
  &:hover {
    background-color: #e384a4;
  }
`;

export default function SignInInput() {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const { email, password } = form;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <InputForm>
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
      <LoginButton type='submit'>SIGN UP</LoginButton>
    </InputForm>
  );
}
