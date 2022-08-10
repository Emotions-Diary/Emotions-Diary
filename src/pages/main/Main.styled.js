import styled from 'styled-components';
import '../../static/fonts/fonts.css';
import { mongle_logo } from '../../static/images/images';

export const MongleLogo = styled.div`
	position: absolute;
	background-image: url(${mongle_logo});
	background-size: contain;
	background-repeat: no-repeat;
	top: 50px;
	left: 50px;
	width: 270px;
	height: 100px;
`;
export const MongleText = styled.div`
	position: absolute;
	width: 420px;
	top: 20vh;
	font-family: 'Cafe24Ssurround';
	font-size: 33px;
`;
export const MainButton = styled.button`
	font-family: 'Cafe24Ssurround';
	position: absolute;
	top: 55px;
	right: 55px;
	width: 150px;
	height: 65px;
	border-radius: 10px;
	background-color: black;
	color: white;
	font-size: 20px;
	&:hover {
		background-color: #f7f6f1;
		color: black;
	}
`;
export const MainBox = styled.div`
	width: 1130px;
	height: 620px;
	position: relative;
	box-sizing: border-box;
	background-color: #f7f6f1;
	box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
	border-radius: 20px;
	border: 9px solid #d7703f;
`;
export const MainBoxHeader = styled.div`
	position: absolute;
	top: 0;
	background-color: #d7703f;
	width: 100%;
	height: 10%;
`;
export const MainBoxHeaderYear = styled.span`
	font-family: 'Cafe24SsurroundAir';
	position: absolute;
	top: 10px;
	left: 50%;
	font-size: 35px;
	width: 100px;
	transform: translateX(-50px);
	color: white;
`;
export const MainCalander = styled.div`
	position: absolute;
	top: 91px;
	left: 50%;
	transform: translateX(-100px);
	width: 200px;
	height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 20px;
`;
export const MainCalanderArBack = styled.span`
	&:hover {
		cursor: pointer;
	}
`;
export const MainCalanderArForward = styled.span`
	&:hover {
		cursor: pointer;
	}
`;
export const MainCalanderMonth = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-family: 'Cafe24Ssurround';
`;
export const MainCalanderMonthText = styled.span`
	font-size: ${(props) => (props.size ? props.size : '14px')};
`;
export const MainMongleBox = styled.div`
	position: absolute;
	top: 180px;
	width: 82%;
	left: 50%;
	transform: translateX(-50%);
	height: 280px;
	display: flex;
	flex-wrap: wrap;
	gap: 20px;
	align-content: flex-start;
	overflow: scroll;
	&::-webkit-scrollbar {
		width: 10px;
	}
	&::-webkit-scrollbar-thumb {
		background-color: #d7703f;
		border-radius: 5px;
	}
`;
export const MainMongle = styled.div`
	background-repeat: no-repeat;
	background-image: url(${(props) =>
		props.emotion ? props.emotion : 'm_orange'});
	background-size: contain;
	width: 80px;
	height: 70px;
	&:hover {
		background-image: url(${(props) =>
			props.emotion_OL ? props.emotion_OL : 'm_orange_OL'});
	}
`;
export const MainMongleAdd = styled.button`
	position: absolute;
	top: 500px;
	left: 50%;
	transform: translateX(-50px);
	background-color: #d7703f;
	font-size: 70px;
	border-radius: 100px;
	width: 80px;
	height: 80px;
	border: none;
	color: white;
	&:hover {
		cursor: pointer;
		border: 3px solid #d7703f;
		background-color: white;
		color: #d7703f;
	}
`;
