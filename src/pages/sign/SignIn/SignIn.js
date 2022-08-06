// React import
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Redux import
import { useDispatch } from 'react-redux';
import { getUserThunk, signInAction } from '../../../redux/modules/user';

// CSS import
import {
  SignInBox,
  SignInInputGroup,
  SignInInput,
  SignInButtonGroup,
  SignInButton,
  AlertSpan,
} from './SignIn.styled';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailRef = useRef();
  const passwordRef = useRef();
  const alertEmailSpanRef = useRef();
  const alertPasswordSpanRef = useRef();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signInAccount = async (event) => {
    event.preventDefault();

    dispatch(getUserThunk(email)).then((res) => {
      const data = res.payload;
      console.log(res.payload);
      if (email === '') {
        alertEmailSpanRef.current.innerText = '계정을 입력해주세요.';
        alertEmailSpanRef.current.style.display = 'block';
        alertPasswordSpanRef.current.style.display = 'none';
      } else {
        if (!res.payload) {
          alertEmailSpanRef.current.innerText = '없는 계정입니다.';
          alertEmailSpanRef.current.style.display = 'block';
          alertPasswordSpanRef.current.style.display = 'none';
        } else {
          if (password === '') {
            alertEmailSpanRef.current.style.display = 'none';
            alertPasswordSpanRef.current.innerText = '패스워드를 입력해주세요.';
            alertPasswordSpanRef.current.style.display = 'block';
          } else {
            if (data.password === password) {
              dispatch(signInAction({ userName: email, loginStatus: true }));
              navigate('/');
            } else {
              alertEmailSpanRef.current.style.display = 'none';
              alertPasswordSpanRef.current.innerText =
                '패스워드가 일치하지 않습니다.';
            }
          }
        }
      }
    });
  };

  return (
    <SignInBox onSubmit={(event) => signInAccount(event)}>
      <SignInInputGroup>
        <SignInInput
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail"
          ref={emailRef}
        />
        <AlertSpan ref={alertEmailSpanRef}></AlertSpan>
        <SignInInput
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          ref={passwordRef}
        />
        <AlertSpan ref={alertPasswordSpanRef}></AlertSpan>
      </SignInInputGroup>
      <SignInButtonGroup>
        <SignInButton type="submit">로그인</SignInButton>
        <SignInButton onClick={() => navigate('/signup')}>
          회원가입
        </SignInButton>
      </SignInButtonGroup>
    </SignInBox>
  );
};

export default SignIn;
