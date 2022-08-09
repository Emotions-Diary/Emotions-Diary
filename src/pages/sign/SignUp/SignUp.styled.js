import styled from 'styled-components';
import Mongles from '../../../static/images/mongles/mongles_group.png';
import '../../../static/fonts/fonts.css';

export const SignUpBox = styled.form`
  width: 485px;
  height: 620px;
  position: relative;
  box-sizing: border-box;
  background: rgba(255, 255, 255);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 20px;
  border: 9px solid #d7703f;
`;
export const SignInHeader = styled.div`
  position: absolute;
  top: 0;
  background-color: #d7703f;
  width: 100%;
  height: 10%;
`;
export const SignInTitle = styled.div`
  font-family: 'Cafe24SsurroundAir';
  text-align: center;
  position: absolute;
  width: 100%;
  top: 100px;
  font-size: 50px;
  font-weight: bolder;
`;
export const SignInDescript = styled.div`
  font-family: 'Cafe24Ssurround';
  width: 100%;
  font-size: 20px;
  text-align: center;
  position: absolute;
  top: 180px;
`;
export const SignInFormGroup = styled.div`
  z-index: 1;
  position: absolute;
  top: 230px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
`;
export const SignUpInputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 60%;
`;
export const EmailGroup = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  /* justify-content: space-between; */
`;
export const EmailInput = styled.input`
  width: 70%;
  height: 30px;
  border: 2px solid #d7703f;
  border-radius: 10px;
  font-size: 14px;
  padding: 5px;
  ::placeholder {
    font-family: 'Cafe24Ssurround';
    color: #9b9b9b;
  }
`;
export const EmailButton = styled.button`
  width: 30%;
  font-size: 17px;
  font-family: 'Cafe24Ssurround';
  background-color: #d7703f;
  border-radius: 10px;
  border: none;
  color: #f7f6f1;
  font-size: 17px;
`;
export const SignUpInput = styled.input`
  width: 95%;
  height: 30px;
  border-radius: 10px;
  border: 2px solid #d7703f;
  font-size: 14px;
  padding: 5px;
  ::placeholder {
    font-family: 'Cafe24Ssurround';
    color: #9b9b9b;
  }
`;
export const SignUpButtonGroup = styled.div`
  display: flex;
  gap: 30px;
`;
export const SignUpButton = styled.button`
  font-family: 'Cafe24Ssurround';
  background-color: #d7703f;
  border-radius: 10px;
  border: none;
  color: #f7f6f1;
  width: 125px;
  height: 50px;
  font-size: 17px;
`;
export const SignUpFooter = styled.div`
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
  top: 580px;
  width: 280px;
  height: 50px;
  background-image: url(${Mongles});
  background-size: cover;
`;
export const AlertSpan = styled.span`
  display: none;
  font-size: 12px;
  font-weight: 700;
  color: ${(props) => props.color || '#ff9696'};
`;