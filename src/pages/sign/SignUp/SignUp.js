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
	SignUpInput,
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
	const telSpanRef = useRef();

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
		} else if (passwdRe === '') {
			passwdReSpanRef.current.style.display = 'none';
		} else {
			passwdReSpanRef.current.style.display = 'none';
		}
	}, [passwdRe]);

	const emailModify = () => {
		emailRef.current.disabled = false;
		emailRef.current.focus();
		emailButtonRef.current.innerText = '중복확인';
		emailSpanRef.current.style.display = 'none';
		setDupCheck(false);
	};

	const emailDupCheck = () => {
		dispatch(emailDupCheckThunk(email)).then((res) => {
			if (res.payload) {
				emailRef.current.focus();
				emailSpanRef.current.style.display = 'block';
				emailSpanRef.current.innerText = '중복되는 메일입니다.';
			} else {
				if (regExp.test(email) === false) {
					emailRef.current.focus();
					emailSpanRef.current.style.display = 'block';
					emailSpanRef.current.innerText = '이메일 형식에 맞지 않습니다.';
				} else if (email !== '') {
					emailRef.current.disabled = true;
					emailSpanRef.current.style.display = 'none';
					emailButtonRef.current.innerText = '수정하기';
					alert('사용 가능한 메일입니다.');
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
				navigate('/');
			}
		} else {
			emailRef.current.focus();
			emailSpanRef.current.style.display = 'block';
			emailSpanRef.current.innerText = '중복 확인을 진행해주세요.';
		}
	};

	return (
		<SignUpBox onSubmit={(event) => signUpAccount(event)}>
			<SignInHeader>
				<Circle />
			</SignInHeader>
			<SignInTitle>SIGN UP</SignInTitle>
			<SignInDescript>
				<SignInDescriptSpan>몽글몽글해지는 순간</SignInDescriptSpan>
				<SignInDescriptSpan>당신만의 하루를 담아보세요!</SignInDescriptSpan>
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
							중복확인
						</EmailButton>
					</EmailGroup>
					<AlertSpan ref={emailSpanRef}></AlertSpan>
					<SignUpInput
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
					<AlertSpan ref={passwdSpanRef}>패스워드가 취약합니다!</AlertSpan>
					<SignUpInput
						type="password"
						value={passwdRe}
						onChange={setPasswdRe}
						placeholder="Re-enter password"
						ref={passwdReRef}
						required
					/>
					<AlertSpan ref={passwdReSpanRef}>패스워드가 맞지 않습니다!</AlertSpan>
					{/* 
        사파리에서는 type="tel"만 지정해도 전화번호 형식으로 사용가능"
        하지만 다른 브라우저에서는 정규식 사용 필요
        */}
					<SignUpInput
						type="tel"
						value={phone}
						onChange={setPhone}
						minLength="9"
						maxLength="13"
						placeholder="Phone number (XX*-XXX*-XXXX)"
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
						text={'회원가입'}
					/>
					<Button
						type={'button'}
						onClick={() => navigate('/')}
						styled={{
							width: '132px',
							height: '50px',
							ft_size: '17px',
						}}
						text={'로그인'}
					/>
				</SignUpButtonGroup>
			</SignInFormGroup>
			<SignUpFooter />
		</SignUpBox>
	);
}

export default SignUp;
