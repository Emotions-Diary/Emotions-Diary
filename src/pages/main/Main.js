// React import
import { useEffect } from 'react';

// Redux import
import { useSelector, useDispatch } from 'react-redux';
import { signInAction } from '../../redux/modules/user';
import { getEmotionThunk } from '../../redux/modules/emotion';

// Package import
import moment from 'moment';
import { useNavigate } from 'react-router-dom';

// Component import
import Circle from '../../components/circle/Circle';
import Skeleton from '../../components/skeleton/Skeleton';
import Mongle from '../../components/mongle/Mongle';

// Style import
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
} from '../../static/images/images';
import {
  MongleLogo,
  MongleText,
  MainButton,
  MainBox,
  MainBoxHeader,
  MainBoxHeaderYear,
  MainCalander,
  MainCalanderArBack,
  MainCalanderArForward,
  MainCalanderMonth,
  MainCalanderMonthText,
  MainMongleBox,
  MainMongleAdd,
} from './Main.styled';

const Main = () => {
  const now = moment();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const emotion = useSelector((state) => state.emotion.emotion);
  const is_loaded = useSelector((state) => state.emotion.is_loaded);
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

  useEffect(() => {
    dispatch(getEmotionThunk());
  }, []);

  return (
    <>
      <MongleLogo onClick={() => navigate('/')} />
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
          {is_loaded ? (
            <Skeleton />
          ) : (
            emotion.map((emo) => {
              if (parseInt(emo.emotion_createDate[1]) === now.month() + 1) {
              return (
                <Mongle
                  key={emo.id}
                  id={emo.id}
                  emotion={emo.emotion_link}
                  emotion_OL={emo.emotion_link_OL}
                />
              );
              }
            })
          )}
        </MainMongleBox>
        <MainMongleAdd onClick={() => navigate('/write')}>+</MainMongleAdd>
      </MainBox>
    </>
  );
};

export default Main;
