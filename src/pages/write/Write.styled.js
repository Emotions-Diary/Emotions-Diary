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
  background: rgba(255, 255, 255);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 20px;
  border: 9px solid #d7703f;
`;
export const WriteHeader = styled.div`
  position: absolute;
  top: 0;
  background-color: #d7703f;
  width: 100%;
  height: 10%;
`;
export const ArrowBack = styled(MdOutlineArrowBackIosNew)`
  color: #d7703f;
  margin-left: 6px;
  margin-top: 6px;
  &:hover{
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
  &:hover{
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
  border-color: #d7703f;
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
  border-color: #d7703f;
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
  color: #d7703f;
`;
export const InputArea = styled.div`
  font-size: 12px;
  font-family: 'Cafe24Ssurround';
  width: 40%;
  height: 3%;
  position: absolute;
  top: 225px;
  display: flex;
  margin-left: 50px;
  color: #d7703f;
`;
export const TextArea = styled.div`
padding-top: 5px;
`
export const TextArea2 = styled.div`
padding-top: 5px;
width: 80px;
margin-right: 5px;

`
export const WriteMongle = styled.div`
  background-repeat: no-repeat;
  background-image: url(${(props) => props.emotion ? props.emotion : 'm_orange'});
  background-size: contain;
  width: 60px;
  height: 50px;
  margin: 5px;
  &:hover {
    background-image: url(${(props) => props.emotion_OL ? props.emotion_OL : 'm_orange_OL'});
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
  width: 80%;
  height: 18px;
  outline: 2px solid #d7703f;
  position: absolute;
  top: 275px;
  border: none;
  border-radius: 10px;
  margin-left: 40px;
  padding-top: 7px;
  padding-left: 12px;
  overflow:hidden;
  resize: none;
&::placeholder{
font-family: 'Cafe24Ssurround';
color: #bfbfbf;
}`
;
export const ContentArea = styled.textarea`
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
line-height:19px;
&::placeholder{
font-family: 'Cafe24Ssurround';
color: #bfbfbf;
}`;
export const WriteButton = styled.button`
width: 132px;
height: 50px;
font-size: 17px;
background-color: #d7703f;
outline: none;
border: none;
border-radius: 10px;
color: #f7f6f1;
position: absolute;
top: 512px;
margin-left: 170px;
font-family: 'Cafe24Ssurround';
padding-top: 3px;
&:hover{
    cursor: pointer;
    outline: #d7703f solid 1.5px;
}
`
