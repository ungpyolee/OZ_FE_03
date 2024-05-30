import React, { useState } from 'react';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import styled from 'styled-components';


function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(true);

  const handleAuth = async (event) => {
    event.preventDefault();
    if (isSignUp) {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log('User signed up:', userCredential.user);
      } catch (error) {
        console.error('Error signing up:', error);
      }
    } else {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log('User signed in:', userCredential.user);
      } catch (error) {
        console.error('Error signing in:', error);
      }
    }
  };

  return (
    <Container>
      <Center>
      <Logo src="/images/apple-gray-logo.svg" alt="로고" />
      <HeadingText>{isSignUp ? 'Sign Up with your E-mail' : 'Sign in with your E-mail'}</HeadingText>
      <Description>You will be signed in to Apple TV+</Description>
      <Form onSubmit={handleAuth}>
      <Input 
      type='email'
      placeholder="이메일을 입력하세요"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
      />
      <Input 
      type='password'
      placeholder="비밀번호를 입력하세요"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      required
      />
      <Button type="submit">{isSignUp ? 'Sign Up' : 'Log In'}</Button>
      </Form>
      <LinkText onClick={() => setIsSignUp(!isSignUp)}>
        {isSignUp ? 'Switch to Log In' : 'Create New E-mail'}
      </LinkText>
      <LinkText>Forgot Apple ID or Password?</LinkText>
      </Center>
    </Container>
  );
}

const Form = styled.form`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
`

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const Center = styled.div`
  max-width: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

`;

const Logo = styled.img`
  margin-bottom: 1.3rem;
  width: 50px;
`;

const HeadingText = styled.h1`
  font-size: 1.9rem;
`;

const Description = styled.p`
  margin-bottom: 2.5rem ;
  font-size: 1.3rem;

`;

const LinkText = styled.button`
  all : unset;
  font-size: 1.2rem;
  color: #2997ff;
  margin: .25rem 0;
  cursor : pointer;
`;

const Button = styled.a`
  margin-top: .5rem;
  margin-bottom : 2rem;
  font-size: 18px;
  padding: 1rem;
  border: 1px solid transparent;
  border-radius: 12px;
  border-color: #5353ec;
  background-color: #5353ec;
  width: 310px;
  font-weight: 500;
  cursor: pointer;
  text-align : center;
  
  &:hover {
    background-color: #2e2ed1;
  }
`;

const Input = styled.input`
margin-top: .5rem;
  margin-bottom: 0.5rem;
  font-size: 18px;
  padding: 1rem;
  border: 1px solid transparent;
  border-radius: 12px;
  border-color: #424245;
  background-color: hsla(0, 0%, 100%,.04);
  width: 310px;
  font-weight: 400;
  cursor: pointer;
  color : #fff;
  

  &:hover {
    background-color: hsla(0, 0%, 100%,.08);
  }
`

export default LoginPage