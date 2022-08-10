// React import
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import useInput from '../../../hooks/useInput';

// Redux import
import { useDispatch } from 'react-redux';
import { getUserThunk, signInAction } from '../../../redux/modules/user';

// Component import
import Circle from '../../../components/circle/Circle';
import Button from '../../../elements/button/Button';

// Style import
import {
	SignInBox,
	SignInHeader,
	SignInTitle,
	SignInDescript,
	SignInDescriptSpan,
	SignInFormGroup,
	SignInInputGroup,
	SignInInput,
	SignInButtonGroup,
	SignInFooter,
	AlertSpan,
} from './SignIn.styled';

const SignIn = () => {
	const [email, setEmail] = useInput('');
	const [password, setPassword] = useInput('');

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
							dispatch(signInAction({ userEmail: email, loginStatus: true }));
							navigate('/');
						} else {
							alertEmailSpanRef.current.style.display = 'none';
							alertPasswordSpanRef.current.style.display = 'block';
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
			<SignInHeader>
				<Circle />
			</SignInHeader>
			<SignInTitle>LOG IN</SignInTitle>
			<SignInDescript>
				<SignInDescriptSpan>오늘도 몽글러들과 함께</SignInDescriptSpan>
				<SignInDescriptSpan>하루를 나눠볼까요?</SignInDescriptSpan>
			</SignInDescript>
			<SignInFormGroup>
				<SignInInputGroup>
					<SignInInput
						type="text"
						value={email}
						onChange={setEmail}
						placeholder="E-mail"
						ref={emailRef}
					/>
					<AlertSpan ref={alertEmailSpanRef}></AlertSpan>
					<SignInInput
						type="password"
						value={password}
						onChange={setPassword}
						placeholder="Password"
						ref={passwordRef}
					/>
					<AlertSpan ref={alertPasswordSpanRef}></AlertSpan>
				</SignInInputGroup>
				<SignInButtonGroup>
					<Button
						type={'submit'}
						styled={{
							width: '132px',
							height: '50px',
							ft_size: '17px',
						}}
						text={'로그인'}
					/>
					<Button
						type={'button'}
						onClick={() => navigate('/signup')}
						styled={{
							width: '132px',
							height: '50px',
							ft_size: '17px',
						}}
						text={'회원가입'}
					/>
				</SignInButtonGroup>
			</SignInFormGroup>
			<SignInFooter />
		</SignInBox>
	);
};

export default SignIn;
