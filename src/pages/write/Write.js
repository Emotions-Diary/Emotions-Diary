// React import
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addEmotionThunk } from '../../redux/modules/emotion';
import { useText } from './WriteCustomHook';
// style import
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
// moment import
import moment from 'moment';

const Write = () => {
  // const [title, setTitle] = useState('');
  const [title, onChangeTitle] = useText('');
  const [content, onChangeContent] = useText('');
  const [nickName, onChangeNickName] = useText('');
  const [password, onChangePassword] = useText('');
  const [link, setLink] = useState('');
  const [link_OL, setLink_OL] = useState('');
  const [createDate, setCreateDate] = useState([]);
  const [orangeState, setOrangeState] = useState(true);
  const [blueState, setBlueState] = useState(true);
  const [greenState, setGreenState] = useState(true);
  const [pinkState, setPinkState] = useState(true);
  const [yellowState, setYellowState] = useState(true);
  const [colorState, setColorState] = useState([]);
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
  };
  const clickGreen = () => {
    setLink(m_green);
    setLink_OL(m_green_OL);
    setGreenState(!greenState);
    setBlueState(true);
    setYellowState(true);
    setPinkState(true);
    setOrangeState(true);
  };
  const clickOrange = () => {
    setLink(m_orange);
    setLink_OL(m_orange_OL);
    setOrangeState(!orangeState);
    setBlueState(true);
    setYellowState(true);
    setPinkState(true);
    setGreenState(true);
  };
  const clickPink = () => {
    setLink(m_pink);
    setLink_OL(m_pink_OL);
    setPinkState(!pinkState);
    setBlueState(true);
    setGreenState(true);
    setYellowState(true);
    setOrangeState(true);
  };
  const clickYellow = () => {
    setLink(m_yellow);
    setLink_OL(m_yellow_OL);
    setYellowState(!yellowState);
    setBlueState(true);
    setOrangeState(true);
    setPinkState(true);
    setGreenState(true);
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

  const combineWrite = () => {
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
    dispatch(addEmotionThunk(newWrite));
    navigate('/');
  };

  return (
    <>
      <MongleLogo />
      <WriteBox
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
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
          <WriteInput value={nickName} onChange={onChangeNickName} />
        </InputArea>
        <InputArea2>
          <TextArea2> 비밀번호 :</TextArea2>
          <WriteInput2
            type="password"
            value={password}
            onChange={onChangePassword}
          />
        </InputArea2>
        <TitleArea
          placeholder="제목"
          value={title}
          onChange={onChangeTitle}
        ></TitleArea>
        <ContentArea
          placeholder="오늘 하루 어땠나요?&#13;&#10;다른 몽글러들에게 추천 해주고 싶은 노래가 있나요?&#13;&#10;오늘 가장 행복했던 일은 무엇인가요?"
          value={content}
          onChange={onChangeContent}
        ></ContentArea>
        <WriteButton onClick={combineWrite}>작성하기</WriteButton>
      </WriteBox>
    </>
  );
};
export default Write;
