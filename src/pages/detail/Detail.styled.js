import styled from 'styled-components';
import '../../static/fonts/fonts.css';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
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
	&:hover {
		cursor: pointer;
	}
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
export const DetailBox = styled.div`
  width: 485px;
  height: 620px;
  position: relative;
  box-sizing: border-box;
  background-color: #f7f6f1;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 20px;
  border: 9px solid #e66a2f;
`;
export const EmotionForm = styled.form``;
export const WriteHeader = styled.div`
  position: absolute;
  top: 0;
  background-color: #e66a2f;
  width: 100%;
  height: 10%;
`;
export const ArrowArea = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background-color: #f7f6f1;
  margin-top: 12px;
  margin-left: 20px;
  &:hover {
    cursor: pointer;
  }
`;
export const ArrowBack = styled(MdOutlineArrowBackIosNew)`
  color: #e66a2f;
  margin-left: 6px;
  margin-top: 6px;
  &:hover {
    cursor: pointer;
  }
`;
export const WriteMongle = styled.div`
  background-repeat: no-repeat;
  background-image: url(${(props) => props.emotion ? props.emotion : 'm_orange'});
  background-size: contain;
  width: 90px;
  height: 75px;
  margin: 5px;
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
  width: 61%;
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
  font-size: 14px;
  background-color: #e66a2f;
  font-family: 'Cafe24Ssurround';
`;
export const ContentArea = styled.textarea`
  font-family: Cafe24Ssurround;
  width: 75%;
  height: 160px;
  margin-left: 40px;
  position: absolute;
  top: 193px;
  outline: 2px solid #e66a2f;
  border: none;
  color: black;
  border-radius: 10px;
  padding: 18px 20px 0px 20px;
  line-height: 21px;
  font-size: 14px;
  background-color: #f7f6f1;
`;
export const UpdateButtonGroup = styled.div`
  margin-top: 390px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 13px;
`;
export const UpdatePassword = styled.input`
  border-radius: 10px;
  background-color: #f7f6f1;
  border: none;
  outline: 2px solid #e66a2f;
  padding-left: 5px;
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
export const CommentForm = styled.form``;
export const CommentGroup = styled.div`
	top: 435px;
	position: absolute;
  width: 92%;
  display: flex;
`;
export const CommentTextGroup = styled.div`
	font-family: 'Cafe24Ssurround';
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
	top: 490px;
	width: 84%;
	height: 100px;
	display: flex;
	flex-direction: column;
	gap: 12px;
	overflow-y: scroll;
	&::-webkit-scrollbar {
		width: 10px;
	}
	&::-webkit-scrollbar-thumb {
		background-color: #e66a2f;
		border-radius: 5px;
	}
`
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
  &:focus {
    outline: none;
  }
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
  padding-left: 10px;
  font-family: 'Cafe24Ssurround';
  &:focus {
    outline: none;
  }
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
	&:hover {
		cursor: pointer;
	}
`;