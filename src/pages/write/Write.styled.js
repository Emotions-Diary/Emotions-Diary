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
  border: 2px solid black;
	border-radius: 10px;
	background-color: black;
	color: white;
	font-size: 20px;
	&:hover {
    cursor: pointer;
		background-color: #f7f6f1;
		color: black;
	}
`;
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
  margin-top: 12px;
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
  background: #f7f6f1;
  width: 100px;
  border-width: 0px 0px 2.8px 0px;
  padding-left: 5px;
  letter-spacing: 0.7px;
  font-size: 10.5px;
  &:focus {
    outline: none;
  }
`;
export const WriteInputArea = styled.div`
  margin: 0px 0px 0px 10px;
`;
export const WriteInput2 = styled.input`
  border-color: #e66a2f;
  background: #f7f6f1;
  width: 120px;
  border-width: 0px 0px 2.8px 0px;
  letter-spacing: 3px;
  padding-bottom: 1px;
  padding-left: 5px;
  &:focus {
    outline: none;
  }
`;
export const WriteInputArea2 = styled.div`
  margin: 0px 23px 0px 0px;
`;
export const InputArea2 = styled.div`
  font-size: 12px;
  font-family: 'Cafe24Ssurround';
  width: 45%;
  height: 3%;
  position: absolute;
  top: 225px;
  left: 180px;
  display: flex;
  margin-left: 50px;
  color: #e66a2f;
`;
export const InputArea = styled.div`
  font-size: 12px;
  font-family: 'Cafe24Ssurround';
  width: 40%;
  height: 3%;
  position: absolute;
  top: 228px;
  display: flex;
  margin-left: 50px;
  color: #e66a2f;
`;
export const TextArea = styled.div`
  padding-top: 2px;
`;
export const TextArea2 = styled.div`
  padding-top: 5px;
  width: 80px;
  margin-right: 5px;
`;
export const WriteMongle = styled.div`
  background-repeat: no-repeat;
  background-image: url(${(props) => props.emotion ? props.emotion : 'm_orange'});
  background-size: contain;
  width: 60px;
  height: 50px;
  margin: 5px;
  &:hover {
    background-image: url(${(props) => props.emotion_OL ? props.emotion_OL : 'm_orange_OL'});
    cursor: pointer;
  }
`;

export const MongleArea = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  margin-left: 50px;
  position: absolute;
  top: 140px;
`;
export const TitleArea = styled.textarea`
  font-family: 'Cafe24Ssurround';
  width: 80%;
  height: 18px;
  background: #f7f6f1;
  outline: 2px solid #e66a2f;
  position: absolute;
  top: 275px;
  border: none;
  border-radius: 10px;
  margin-left: 40px;
  padding-top: 7px;
  padding-left: 12px;
  overflow: hidden;
  resize: none;
  &::placeholder {
    font-family: 'Cafe24Ssurround';
    color: #bfbfbf;
  }
`;
export const ContentArea = styled.textarea`
  font-family: 'Cafe24Ssurround';
  width: 80%;
  height: 160px;
  margin-left: 40px;
  position: absolute;
  top: 315px;
  outline: 2px solid #e66a2f;
  border: none;
  border-radius: 10px;
  background: #f7f6f1;
  padding-top: 10px;
  padding-left: 12px;
  line-height: 19px;
  &::placeholder {
    font-family: 'Cafe24Ssurround';
    color: #bfbfbf;
  }
`;
export const WriteButtonArea = styled.div`
  position: absolute;
  top: 512px;
  margin-left: 170px;
`;
export const WriteButton = styled.button`
  width: 132px;
  height: 50px;
  font-size: 17px;
  background-color: #e66a2f;
  border: none;
  border-radius: 10px;
  color: #f7f6f1;
  font-family: 'Cafe24Ssurround';
  padding-top: 3px;
  &:hover {
    cursor: pointer;
    border: 2px solid white;
  }

`;
