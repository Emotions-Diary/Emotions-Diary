import styled from 'styled-components';
import '../../static/fonts/fonts.css';

// Redux import
import { useSelector, useDispatch } from 'react-redux';
import { signInAction } from '../../redux/modules/user';

// Package import
import moment from 'moment';
import { useNavigate } from 'react-router-dom';

// Component import
import Circle from '../../components/Circle/Circle';

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
} from '../../static/images/images';

const Main = () => {
  const now = moment();
  const navigate = useNavigate();
  const dispatch = useDispatch();
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

  const signOut = () => {
    dispatch(signInAction({ userEmail: '', loginStatus: false }));
    navigate('/');
  };

  return (
    <>
      <MongleLogo />
      <MongleText>몽글러들의 하루는 어땠나요?</MongleText>
      <MainButton onClick={() => signOut()}>LOGOUT</MainButton>
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
        <MainMongleBox>
          <MainMongle emotion={m_blue} emotion_OL={m_blue_OL} />
          <MainMongle emotion={m_green} emotion_OL={m_green_OL} />
          <MainMongle emotion={m_orange} emotion_OL={m_orange_OL} />
          <MainMongle emotion={m_pink} emotion_OL={m_pink_OL} />
          <MainMongle emotion={m_yellow} emotion_OL={m_yellow_OL} />
          <MainMongle emotion={m_blue} emotion_OL={m_blue_OL} />
          <MainMongle emotion={m_blue} emotion_OL={m_blue_OL} />
          <MainMongle emotion={m_blue} emotion_OL={m_blue_OL} />
          <MainMongle emotion={m_blue} emotion_OL={m_blue_OL} />
          <MainMongle emotion={m_blue} emotion_OL={m_blue_OL} />
          <MainMongle emotion={m_blue} emotion_OL={m_blue_OL} />
          <MainMongle emotion={m_blue} emotion_OL={m_blue_OL} />
          <MainMongle emotion={m_blue} emotion_OL={m_blue_OL} />
          <MainMongle emotion={m_blue} emotion_OL={m_blue_OL} />
          <MainMongle emotion={m_blue} emotion_OL={m_blue_OL} />
          <MainMongle emotion={m_blue} emotion_OL={m_blue_OL} />
          <MainMongle emotion={m_blue} emotion_OL={m_blue_OL} />
          <MainMongle emotion={m_blue} emotion_OL={m_blue_OL} />
          <MainMongle emotion={m_blue} emotion_OL={m_blue_OL} />
          <MainMongle emotion={m_blue} emotion_OL={m_blue_OL} />
          <MainMongle emotion={m_blue} emotion_OL={m_blue_OL} />
          <MainMongle emotion={m_blue} emotion_OL={m_blue_OL} />
          <MainMongle emotion={m_blue} emotion_OL={m_blue_OL} />
          <MainMongle emotion={m_blue} emotion_OL={m_blue_OL} />
          <MainMongle emotion={m_blue} emotion_OL={m_blue_OL} />
          <MainMongle emotion={m_blue} emotion_OL={m_blue_OL} />
          <MainMongle emotion={m_blue} emotion_OL={m_blue_OL} />
          <MainMongle emotion={m_blue} emotion_OL={m_blue_OL} />
          <MainMongle emotion={m_blue} emotion_OL={m_blue_OL} />
          <MainMongle emotion={m_blue} emotion_OL={m_blue_OL} />
          <MainMongle emotion={m_blue} emotion_OL={m_blue_OL} />
          <MainMongle emotion={m_blue} emotion_OL={m_blue_OL} />
          <MainMongle emotion={m_blue} emotion_OL={m_blue_OL} />
        </MainMongleBox>
        <MainMongleAdd className="material-symbols-outlined">add_circle</MainMongleAdd>
      </MainBox>
    </>
  );
};

export default Main;

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
  background-image: url(${(props) => props.emotion ? props.emotion : 'm_orange'});
  background-size: contain;
  width: 80px;
  height: 70px;
  &:hover {
    background-image: url(${(props) => props.emotion_OL ? props.emotion_OL : 'm_orange_OL'});
  }
`;
export const MainMongleAdd = styled.span`
  position: absolute;
  width: 80px;
  height: 80px;
  top: 530px;
`;
