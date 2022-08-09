import styled from 'styled-components';
import '../static/fonts/fonts.css';

// Package import
import moment from 'moment';

// Component import
import Circle from '../components/Circle/Circle';

import {
  m_blue_OL,
  m_blue,
  m_green_OL,
  m_green,
  m_orange_OL,
  m_orange,
  m_pink_OL,
  m_pink,
  m_yellow_OL,
  m_yellow,
  mongle_logo,
} from '../static/images/images';

const Main = () => {
  const now = moment();
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  return (
    <>
      <MongleLogo />
      <MongleText>몽글러들의 하루는 어땠나요?</MongleText>
      <MainBox>
        <MainBoxHeader>
          <Circle />
          <MainBoxHeaderYear>{now.format('YYYY')}</MainBoxHeaderYear>
        </MainBoxHeader>
        <MainCalander>
          <MainCalanderArBack className="material-symbols-outlined">
            arrow_back_ios_new
          </MainCalanderArBack>
          <MainCalanderMonth>
            <MainCalanderMonthText size={'34px'}>
              {now.month() + 1}
            </MainCalanderMonthText>
            <MainCalanderMonthText>{months[now.month()]}</MainCalanderMonthText>
          </MainCalanderMonth>
          <MainCalanderArForward className="material-symbols-outlined">
            arrow_forward_ios
          </MainCalanderArForward>
        </MainCalander>
      </MainBox>
    </>
  );
};

export default Main;

export const MongleLogo = styled.div`
  position: absolute;
  background-image: url(${mongle_logo});
  background-size: cover;
  top: 10px;
  left: 10px;
  width: 300px;
  height: 100px;
`;
export const MongleText = styled.div`
  position: absolute;
  width: 420px;
  top: 20vh;
  font-family: 'Cafe24Ssurround';
  font-size: 33px;
`;
export const MainBox = styled.div`
  width: 1130px;
  height: 620px;
  position: relative;
  box-sizing: border-box;
  background: rgba(255, 255, 255);
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
  font-family: 'Cafe24Ssurround';
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
  top: 80px;
  width: 100%;
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
