import styled from 'styled-components';
import Mongles from '../../static/images/mongles/mongles_group.png';
import '../../static/fonts/fonts.css';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import { hover } from '@testing-library/user-event/dist/hover';
import { findByPlaceholderText } from '@testing-library/react';

export const WriteBox = styled.form`
	width: 485px;
	height: 620px;
	position: relative;
	box-sizing: border-box;
	background: #f7f6f1;
	box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
	border-radius: 20px;
	border: 9px solid #e66a2f;
`;
export const WriteHeader = styled.div`
	position: absolute;
	top: 0;
	background-color: #e66a2f;
	width: 100%;
	height: 10%;
`;
export const ArrowBack = styled(MdOutlineArrowBackIosNew)`
	color: #e66a2f;
	margin-left: 6px;
	margin-top: 6px;
	&:hover {
		cursor: pointer;
	}
`;
export const ArrowArea = styled.div`
	width: 30px;
	height: 30px;
	border-radius: 15px;
	background-color: #f7f6f1;
	margin-top: 10px;
	margin-left: 20px;
	&:hover {
		cursor: pointer;
	}
`;
export const WriteDescript = styled.div`
	font-family: 'Cafe24Ssurround';
	width: 100%;
	font-size: 21px;
	text-align: center;
	position: absolute;
	top: 100px;
`;
export const WriteInput = styled.input`
	font-family: 'Cafe24Ssurround';
	border-color: #e66a2f;
	width: 100px;
	margin-left: 10px;
	border-left-width: 0px;
	border-right-width: 0px;
	border-top-width: 0px;
	border-bottom-width: 2.8px;
	/* border-radius: 2pt; */
	/* padding-bottom: 1px; */
	padding-left: 5px;
	letter-spacing: 0.7px;
	font-size: 10.5px;
	&:focus {
		outline: none;
	}
`;
export const WriteInput2 = styled.input`
	/* font-family: 'Cafe24Ssurround'; */
	border-color: #e66a2f;
	width: 120px;
	margin-right: 23px;
	border-left-width: 0px;
	border-right-width: 0px;
	border-top-width: 0px;
	border-bottom-width: 2.8px;
	letter-spacing: 3px;
	/* border-radius: 2pt; */
	padding-bottom: 1px;
	padding-left: 5px;
	/* font-size: 11px; */
	&:focus {
		outline: none;
	}
`;
export const CommentInputArea = styled.div`
	font-size: 12px;
	font-family: 'Cafe24Ssurround';
	width: 40%;
	height: 3%;
	position: absolute;
	top: 450px;
	display: flex;
	margin-left: 40px;
	color: #e66a2f;
	&::placeholder {
		font-family: 'Cafe24Ssurround';
		color: #cecece;
	}
`;
export const CommentInputArea2 = styled.div`
	font-size: 12px;
	font-family: 'Cafe24Ssurround';
	width: 45%;
	height: 3%;
	position: absolute;
	top: 450px;
	left: 160px;
	display: flex;
	margin-left: 50px;
	color: #e66a2f;
	&::placeholder {
		font-family: 'Cafe24Ssurround';
		color: #cecece;
	}
`;

export const WriteMongle = styled.div`
	background-repeat: no-repeat;
	background-image: url(${(props) => props.emotion ? props.emotion : 'm_orange'});
	background-size: contain;
	width: 90px;
	height: 75px;
	margin: 5px;
	&:hover {
		background-image: url(${(props) => props.emotion_OL ? props.emotion_OL : 'm_orange_OL'});
	}
`;

export const MongleArea = styled.div`
	width: 100%;
	height: 100px;
	display: flex;
	margin-left: 30px;
	position: absolute;
	top: 85px;
`;
export const TitleArea = styled.textarea`
	width: 62%;
	height: 23px;
	outline: 2px solid #e66a2f;
	position: absolute;
	top: 127px;
	border: none;
	border-radius: 8px;
	margin-left: 130px;
	padding-top: 10px;
	padding-left: 12px;
	overflow: hidden;
	resize: none;
	color: #f7f6f1;
	font-size: 15px;
	background-color: #e66a2f;
	font-family: 'Cafe24Ssurround';
`;
export const ContentArea = styled.textarea`
	width: 75%;
	height: 160px;
	margin-left: 40px;
	position: absolute;
	top: 193px;
	outline: 2px solid #e66a2f;
	border: none;
	border-radius: 10px;
	padding: 18px 20px 0px 20px;
	line-height: 21px;
	font-size: 13px;
	background-color: #f7f6f1;
	&::placeholder {
		font-family: 'Cafe24Ssurround';
		color: #212121;
	}
`;
export const WriteButton = styled.button`
	width: 132px;
	height: 50px;
	font-size: 17px;
	background-color: #e66a2f;
	outline: none;
	border: none;
	border-radius: 10px;
	color: #f7f6f1;
	position: absolute;
	top: 512px;
	margin-left: 170px;
	font-family: 'Cafe24Ssurround';
	padding-top: 3px;
	&:hover {
		cursor: pointer;
		outline: #e66a2f solid 1.5px;
	}
`;
export const UpdateButtonGroup = styled.div`
	margin-top: 390px;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 13px;
`;
export const UpdateButton = styled.button`
	font-family: 'Cafe24Ssurround';
	background-color: #e66a2f;
	border-radius: 10px;
	border: none;
	color: #f7f6f1;
	width: 70px;
	height: 30px;
	font-size: 11px;
`;
export const CancelButton = styled.button`
	font-family: 'Cafe24Ssurround';
	background-color: #cecece;
	border-radius: 10px;
	border: none;
	color: #f7f6f1;
	width: 70px;
	height: 30px;
	font-size: 11px;
`;

export const InputUnderlined = styled.div`
	border-left-width: 0;
	border-right-width: 0;
	border-top-width: 0;
	border-bottom-width: 1;
	border: 0;
	border-bottom: 1 solid #ff0000;
`;

export const DetailNickname = styled.div`
	font-size: 12px;
	font-family: 'Cafe24Ssurround';
	width: 30%;
	height: 3%;
	position: absolute;
	top: 10px;
	left: 10px;
	display: flex;
	margin-right: 110px;
	color: #e66a2f;
`;
export const DetailDate = styled.div`
	font-size: 12px;
	font-family: 'Cafe24Ssurround';
	width: 45%;
	height: 3%;
	position: absolute;
	top: 10px;
	left: 180px;
	display: flex;
	margin-left: 50px;
	color: #e66a2f;
`;
export const DetailInputArea = styled.div`
	font-size: 12px;
	font-family: 'Cafe24Ssurround';
	width: 40%;
	height: 3%;
	position: absolute;
	top: 94px;
	display: flex;
	margin-left: 120px;
	color: #e66a2f;
`;

export const CommentNicknameTextArea = styled.textarea`
	width: 80%;
	height: 160px;
	margin-left: 40px;
	position: absolute;
	top: 315px;
	outline: 2px solid #d7703f;
	border: none;
	border-radius: 10px;
	padding-top: 10px;
	padding-left: 12px;
	line-height: 19px;
	&::placeholder {
		font-family: 'Cafe24Ssurround';
		color: #bfbfbf;
	}
`;

export const CommentContentTextArea = styled.textarea`
	width: 80%;
	height: 160px;
	margin-left: 40px;
	position: absolute;
	top: 315px;
	outline: 2px solid #d7703f;
	border: none;
	border-radius: 10px;
	padding-top: 10px;
	padding-left: 12px;
	line-height: 19px;
	&::placeholder {
		font-family: 'Cafe24Ssurround';
		color: #bfbfbf;
	}
`;

export const AddCommentButton = styled.button`
	font-family: 'Cafe24Ssurround';
	background-color: #e66a2f;
	border-radius: 10px;
	border: none;
	color: #f7f6f1;
	width: 70px;
	height: 30px;
	font-size: 11px;
`;

export const CommentInputGroup = styled.div`
	margin-top: 390px;
	width: 130%;
	display: flex;
	gap: 2px;
`;

export const CommentGroup = styled.div`
	margin-top: 10px;
	width: 90%;
	height: auto;
	display: flex;
`;
export const CommentNicknameInput = styled.input`
	background-color: #f7f6f1;
	width: 30%;
	height: 35px;
	border-style: none;
	border-bottom: 2px solid #e66a2f;
	font-size: 14px;
	padding-left: 10px;
	padding-right: 10px;
	margin-right: 20px;
	margin-left: 40px;
	font-family: 'Cafe24Ssurround';
	::placeholder {
		font-family: 'Cafe24Ssurround';
		color: #9b9b9b;
	}
`;
export const CommentContentInput = styled.input`
	background-color: #f7f6f1;
	width: 70%;
	height: 35px;
	border-style: none;
	border-bottom: 2px solid #e66a2f;
	font-size: 14px;
	padding-left: 20px;
	font-family: 'Cafe24Ssurround';
	::placeholder {
		font-family: 'Cafe24Ssurround';
		color: #9b9b9b;
	}
`;
export const CommentAddButton = styled.button`
	width: 22%;
	font-family: 'Cafe24Ssurround';
	background-color: #e66a2f;
	border-radius: 10px;
	border: none;
	color: #f7f6f1;
	font-size: 13px;
	margin-left: 10px;
`;

