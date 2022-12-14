// React import
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useInput from '../../../hooks/useInput';

// Redux import
import { useDispatch } from 'react-redux';
import { emailDupCheckThunk, addUserThunk } from '../../../redux/modules/user';

// Component import
import Circle from '../../../components/circle/Circle';
import Button from '../../../elements/button/Button';

// Package import
import PasswordStrengthBar from 'react-password-strength-bar';

// Style import
import {
  SignUpBox,
  SignInHeader,
  SignInTitle,
  SignInDescript,
  SignInDescriptSpan,
  SignInFormGroup,
  SignUpInputGroup,
  SignUpInputPassword,
  SignUpInputPhone,
  SignUpButtonGroup,
  SignUpFooter,
  AlertSpan,
  EmailGroup,
  EmailInput,
  EmailButton,
} from './SignUp.styled';

function SignUp() {
  const [email, setEmail] = useInput('');
  const [dupCheck, setDupCheck] = useState(false);
  const [passwd, setPasswd] = useInput('');
  const [passwdRe, setPasswdRe] = useInput('');
  const [phone, setPhone] = useInput('');

  const emailRef = useRef();
  const emailSpanRef = useRef();
  const emailButtonRef = useRef();
  const passwdRef = useRef();
  const passwdReRef = useRef();
  const strengthBarRef = useRef();
  const passwdSpanRef = useRef();
  const passwdReSpanRef = useRef();

  const regExp =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const newAccount = {
    email: email,
    password: passwd,
    phone: phone,
  };

  useEffect(() => {
    if (passwd !== passwdRe) {
      passwdReSpanRef.current.style.display = 'block';
      passwdSpanRef.current.style.display = 'none';
    } else {
      passwdReSpanRef.current.style.display = 'none';
    }

    if (passwdRe === '') {
      passwdReSpanRef.current.style.display = 'none';
    }
  }, [passwdRe]);

  const emailModify = () => {
    emailRef.current.disabled = false;
    emailRef.current.focus();
    emailButtonRef.current.innerText = '????????????';
    emailSpanRef.current.style.display = 'none';
    setDupCheck(false);
  };

  const emailDupCheck = () => {
    dispatch(emailDupCheckThunk(email)).then((res) => {
      if (res.payload) {
        emailRef.current.focus();
        emailSpanRef.current.style.display = 'block';
        emailSpanRef.current.innerText = '???????????? ???????????????.';
      } else {
        if (regExp.test(email) === false) {
          emailRef.current.focus();
          emailSpanRef.current.style.display = 'block';
          emailSpanRef.current.innerText = '????????? ????????? ?????? ????????????.';
        } else if (email !== '') {
          emailRef.current.disabled = true;
          emailSpanRef.current.style.display = 'none';
          emailButtonRef.current.innerText = '????????????';
          alert('?????? ????????? ???????????????.');
          setDupCheck(true);
        }
      }
    });
  };

  const signUpAccount = (event) => {
    event.preventDefault();
    if (dupCheck) {
      if (strengthBarRef.current.state.score <= 2) {
        passwdRef.current.focus();
        passwdSpanRef.current.style.display = 'block';
        passwdReSpanRef.current.style.display = 'none';
      } else if (passwd !== passwdRe) {
        passwdReRef.current.focus();
        passwdSpanRef.current.style.display = 'none';
        passwdReSpanRef.current.style.display = 'block';
      } else {
        dispatch(addUserThunk(newAccount));
        alert('???????????? ????????? ??????????????????!????');
        navigate('/');
      }
    } else {
      emailRef.current.focus();
      emailSpanRef.current.style.display = 'block';
      emailSpanRef.current.innerText = '?????? ????????? ??????????????????.';
    }
  };

  return (
    <SignUpBox onSubmit={(event) => signUpAccount(event)}>
      <SignInHeader>
        <Circle />
      </SignInHeader>
      <SignInTitle>SIGN UP</SignInTitle>
      <SignInDescript>
        <SignInDescriptSpan>????????????????????? ??????</SignInDescriptSpan>
        <SignInDescriptSpan>???????????? ????????? ???????????????!</SignInDescriptSpan>
      </SignInDescript>
      <SignInFormGroup>
        <SignUpInputGroup>
          <EmailGroup>
            <EmailInput
              type="email"
              value={email}
              onChange={setEmail}
              placeholder="E-mail"
              ref={emailRef}
              required
            />
            <EmailButton
              type="button"
              onClick={() => (dupCheck ? emailModify() : emailDupCheck())}
              ref={emailButtonRef}
            >
              ????????????
            </EmailButton>
          </EmailGroup>
          <AlertSpan ref={emailSpanRef}></AlertSpan>
          <SignUpInputPassword
            type="password"
            value={passwd}
            onChange={setPasswd}
            placeholder="Password"
            ref={passwdRef}
            required
          />
          <PasswordStrengthBar
            password={passwd}
            style={{ display: 'none' }}
            ref={strengthBarRef}
          />
          <AlertSpan ref={passwdSpanRef}>??????????????? ???????????????!</AlertSpan>
          <SignUpInputPassword
            type="password"
            value={passwdRe}
            onChange={setPasswdRe}
            placeholder="Re-enter password"
            ref={passwdReRef}
            required
          />
          <AlertSpan ref={passwdReSpanRef}>??????????????? ?????? ????????????!</AlertSpan>
          {/* 
        ?????????????????? type="tel"??? ???????????? ???????????? ???????????? ????????????"
        ????????? ?????? ????????????????????? ????????? ?????? ??????
        */}
          <SignUpInputPhone
            type="tel"
            value={phone}
            onChange={setPhone}
            minLength="9"
            maxLength="13"
            placeholder="Phone number (00*-000*-0000)"
            pattern="[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}"
            required
          />
        </SignUpInputGroup>
        <SignUpButtonGroup>
          <Button
            type={'submit'}
            styled={{
              width: '132px',
              height: '50px',
              ft_size: '17px',
            }}
            text={'????????????'}
          />
          <Button
            type={'button'}
            onClick={() => navigate('/')}
            styled={{
              width: '132px',
              height: '50px',
              ft_size: '17px',
            }}
            text={'?????????'}
          />
        </SignUpButtonGroup>
      </SignInFormGroup>
      <SignUpFooter />
    </SignUpBox>
  );
}

export default SignUp;
