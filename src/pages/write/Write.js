// React import
import { useState, useEffect } from 'react';
import { useLinkClickHandler, useNavigate } from 'react-router-dom';
import useInput from '../../hooks/useInput';

// Redux import
import { useDispatch, useSelector } from 'react-redux';
import { addEmotionThunk } from '../../redux/modules/emotion';

// Package import
import moment from 'moment';

// Style import
import {
  WriteBox,
  WriteHeader,
  ArrowBack,
  ArrowArea,
  WriteDescript,
  InputArea,
  WriteInput,
  WriteInput2,
  InputArea2,
  WriteMongle,
  MongleArea,
  TitleArea,
  ContentArea,
  WriteButton,
  TextArea,
  TextArea2,
  MongleLogo,
} from './Write.styled';

// Image import
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

const Write = () => {
  const [title, onChangeTitle] = useInput('');
  const [content, onChangeContent] = useInput('');
  const [nickName, onChangeNickName] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [link, setLink] = useState('');
  const [link_OL, setLink_OL] = useState('');
  const [createDate, setCreateDate] = useState([]);
  const [orangeState, setOrangeState] = useState(true);
  const [blueState, setBlueState] = useState(true);
  const [greenState, setGreenState] = useState(true);
  const [pinkState, setPinkState] = useState(true);
  const [yellowState, setYellowState] = useState(true);
  const [click, setClick] = useState(false);
  const userEmail = useSelector((state) => state.user.userEmail);
  const navigate = useNavigate();

  const backMain = () => {
    navigate('/');
  };

  const clickBlue = () => {
    setLink(m_blue);
    setLink_OL(m_blue_OL);
    setBlueState(!blueState);
    setGreenState(true);
    setYellowState(true);
    setPinkState(true);
    setOrangeState(true);
    setClick(!click);
  };
  const clickGreen = () => {
    setLink(m_green);
    setLink_OL(m_green_OL);
    setGreenState(!greenState);
    setBlueState(true);
    setYellowState(true);
    setPinkState(true);
    setOrangeState(true);
    setClick(!click);
  };
  const clickOrange = () => {
    setLink(m_orange);
    setLink_OL(m_orange_OL);
    setOrangeState(!orangeState);
    setBlueState(true);
    setYellowState(true);
    setPinkState(true);
    setGreenState(true);
    setClick(!click);
  };
  const clickPink = () => {
    setLink(m_pink);
    setLink_OL(m_pink_OL);
    setPinkState(!pinkState);
    setBlueState(true);
    setGreenState(true);
    setYellowState(true);
    setOrangeState(true);
    setClick(!click);
  };
  const clickYellow = () => {
    setLink(m_yellow);
    setLink_OL(m_yellow_OL);
    setYellowState(!yellowState);
    setBlueState(true);
    setOrangeState(true);
    setPinkState(true);
    setGreenState(true);
    setClick(!click);
  };

  const dispatch = useDispatch();

  const nowTime = moment()
    .format('YYYY-MM-DD')
    .split('-')
    .map((item) => {
      if (item[0] === '0') return item[1];
      else return item;
    });

  useEffect(() => {
    setCreateDate(nowTime);
  }, []);

  const combineWrite = (e) => {
    e.preventDefault();

    const newWrite = {
      emotion_title: title,
      emotion_content: content,
      emotion_link: link,
      emotion_link_OL: link_OL,
      emotion_password: password,
      emotion_createDate: createDate,
      user_email: userEmail,
      user_nickName: nickName,
    };

    if (!click) {
      alert('몽글이를 선택해주세요!');
    } else {
      dispatch(addEmotionThunk(newWrite));
      navigate('/');
    }
  };

  return (
    <>
      <MongleLogo />
      <WriteBox onSubmit={(e) => combineWrite(e)}>
        <WriteHeader>
          <ArrowArea onClick={backMain}>
            <ArrowBack onClick={backMain} />
          </ArrowArea>
        </WriteHeader>
        <MongleArea>
          <WriteMongle
            emotion={orangeState ? m_orange : m_orange_OL}
            emotion_OL={m_orange_OL}
            onClick={clickOrange}
          />
          <WriteMongle
            emotion={blueState ? m_blue : m_blue_OL}
            emotion_OL={m_blue_OL}
            onClick={clickBlue}
          />
          <WriteMongle
            emotion={pinkState ? m_pink : m_pink_OL}
            emotion_OL={m_pink_OL}
            onClick={clickPink}
          />
          <WriteMongle
            emotion={yellowState ? m_yellow : m_yellow_OL}
            emotion_OL={m_yellow_OL}
            onClick={clickYellow}
          />
          <WriteMongle
            emotion={greenState ? m_green : m_green_OL}
            emotion_OL={m_green_OL}
            onClick={clickGreen}
          />
        </MongleArea>
        <WriteDescript>오늘 몽글러의 기분은?</WriteDescript>
        <InputArea>
          <TextArea> 닉네임 :</TextArea>{' '}
          <WriteInput value={nickName} onChange={onChangeNickName} required />
        </InputArea>
        <InputArea2>
          <TextArea2> 비밀번호 :</TextArea2>
          <WriteInput2
            type="password"
            value={password}
            onChange={onChangePassword}
            required
          />
        </InputArea2>
        <TitleArea
          placeholder="제목"
          value={title}
          onChange={onChangeTitle}
          required
        ></TitleArea>
        <ContentArea
          placeholder="오늘 하루 어땠나요?&#13;&#10;다른 몽글러들에게 추천 해주고 싶은 노래가 있나요?&#13;&#10;오늘 가장 행복했던 일은 무엇인가요?"
          value={content}
          onChange={onChangeContent}
          required
        ></ContentArea>
        <WriteButton type="submit">작성하기</WriteButton>
      </WriteBox>
    </>
  );
};
export default Write;
