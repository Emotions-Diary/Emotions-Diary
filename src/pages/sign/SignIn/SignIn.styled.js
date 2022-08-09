import styled from 'styled-components';
import Mongles from '../../../static/images/mongles/mongles_group.png';
import '../../../static/fonts/fonts.css';

export const SignInBox = styled.form`
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
  position: absolute;
  top: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
`;
export const SignInInputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 60%;
`;
export const SignInInput = styled.input`
  width: 95%;
  height: 50px;
  border: 2px solid #d7703f;
  border-radius: 10px;
  font-size: 14px;
  padding: 5px;
  color: black;
  ::placeholder {
    font-family: 'Cafe24Ssurround';
    color: #9b9b9b;
  }
`;
export const SignInButtonGroup = styled.div`
  width: 100%;
  top: 470px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;
export const SignInButton = styled.button`
  font-family: 'Cafe24Ssurround';
  background-color: #d7703f;
  border-radius: 10px;
  border: none;
  color: #f7f6f1;
  width: 125px;
  height: 50px;
  font-size: 17px;
`;
export const SignInFooter = styled.div`
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
  top: 580px;
  width: 280px;
  height: 50px;
  background-image: url(${Mongles});
  background-size: cover;
`
export const AlertSpan = styled.span`
  display: none;
  font-size: 12px;
  font-weight: 700;
  color: ${(props) => props.color || '#ff9696'};
`;
