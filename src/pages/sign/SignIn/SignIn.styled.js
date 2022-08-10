import styled from 'styled-components';
import Mongles from '../../../static/images/mongles/mongles_group.png';
import '../../../static/fonts/fonts.css';

export const SignInBox = styled.form`
  width: 485px;
  height: 620px;
  position: relative;
  box-sizing: border-box;
  background-color: #f7f6f1;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 20px;
  border: 9px solid #e66a2f;
`;
export const SignInHeader = styled.div`
  position: absolute;
  top: 0;
  background-color: #e66a2f;
  width: 100%;
  height: 10%;
`;
export const SignInTitle = styled.div`
  font-family: 'Cafe24Ssurround';
  text-align: center;
  position: absolute;
  width: 100%;
  top: 153px;
  font-size: 50px;
  font-weight: bolder;
`;
export const SignInDescript = styled.div`
  font-family: 'Cafe24SsurroundAir';
  width: 100%;
  font-size: 18px;
  text-align: center;
  position: absolute;
  top: 230px;
  display: flex;
  flex-direction: column;
  gap: 9px;
`;
export const SignInDescriptSpan = styled.span`
  width: 100%;
`;
export const SignInFormGroup = styled.div`
  position: absolute;
  top: 318px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
`;
export const SignInInputGroup = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: content-box;
  gap: 10px;
  width: 60%;
`;
export const SignInInputEmail = styled.input`
  font-family: 'Cafe24Ssurround';
  background-color: #f7f6f1;
  width: 91%;
  height: 40px;
  border: 2px solid #e66a2f;
  border-radius: 10px;
  font-size: 14px;
  padding-left: 20px;
  color: black;
  &:focus {
    outline: none;
  }
  ::placeholder {
    color: #9b9b9b;
  }
`;
export const SignInInputPassword = styled.input`
  background-color: #f7f6f1;
  width: 91%;
  height: 40px;
  border: 2px solid #e66a2f;
  border-radius: 10px;
  font-size: 14px;
  padding-left: 20px;
  color: black;
  &:focus {
    outline: none;
  }
  ::placeholder {
    font-family: 'Cafe24Ssurround';
    color: #9b9b9b;
  }
`;
export const SignInButtonGroup = styled.div`
  margin-top: 15px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
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
`;
export const AlertSpan = styled.span`
  display: none;
  font-size: 12px;
  font-weight: 700;
  color: ${(props) => props.color || '#ff9696'};
`;
