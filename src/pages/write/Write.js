// React import
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addEmotionThunk } from '../../redux/modules/emotion';
import axios from 'axios';
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
  mongle_logo,
} from '../../static/images/images';
// moment import
import moment from 'moment';

const Write = () => {
  const [writes, setwrites] = useState(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [nickName, setNickName] = useState('');
  const [password, setPassword] = useState('');
  const [link, setLink] = useState('');
  const [link_OL, setLink_OL] = useState('');
  const [createDate, setCreateDate] = useState([]);
  const [email, setEmail] = useState('');
  const [orangeState, setOrangeState] = useState(true);
  const [blueState, setBlueState] = useState(true);
  const [greenState, setGreenState] = useState(true);
  const [pinkState, setPinkState] = useState(true);
  const [yellowState, setYellowState] = useState(true);
  const userEmail = useSelector((state) => state.user);
  console.log(userEmail);
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

  // dispatch(addEmotionThunk(writes));
  // dispatch(emotionActions.emotionAction(emotions))
  // axios.post('http://localhost:5001/users', emotions);
  // };

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

  //시간값

  // const getData = axios
  //   .get('http://localhost:5001/user')
  //   .then((res) => res.data)
  //   .then((res) => console.log(res));
  // console.log(getData);

  const combineWrite = () => {
    const newWrite = {
      emotion_title: title,
      emotion_content: content,
      emotion_link: link,
      emotion_link_OL: link_OL,
      emotion_password: password,
      emotion_createDate: createDate,
      // "user_email": "",
      user_nickName: nickName,
    };
    dispatch(addEmotionThunk(newWrite));
  };

  // useEffect(()=>{
  // userMemoris()},[]
  // )
  return (
    <WriteBox
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <WriteHeader>
        <ArrowArea>
          <ArrowBack />
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
        <WriteInput
          value={nickName}
          onChange={(event) => {
            setNickName(event.target.value);
          }}
        />
      </InputArea>
      <InputArea2>
        <TextArea2> 비밀번호 :</TextArea2>
        <WriteInput2
          type="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
      </InputArea2>
      <TitleArea
        placeholder="제목"
        value={title}
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      ></TitleArea>
      <ContentArea
        placeholder="오늘 하루 어땠나요?&#13;&#10;다른 몽글러들에게 추천 해주고 싶은 노래가 있나요?&#13;&#10;오늘 가장 행복했던 일은 무엇인가요?"
        value={content}
        onChange={(event) => {
          setContent(event.target.value);
        }}
      ></ContentArea>
      <WriteButton onClick={combineWrite}>작성하기</WriteButton>
    </WriteBox>
  );
};
export default Write;

//axios.get으로 유저 정보값 가져오고
//input값들을 api설계에 맞춰서 정리한 후
//가져온 get에서 이메일값을 추가 한후  post
// {
//     emotion_id: ‘’, state
//     emotion_title: ‘’, state
//     emotion_content: ‘’, state
//     emotion_link: ‘’,
//     emotion_password: ‘’, state
//     emotion_createDate: ’’,
//     user_email: ‘’,  ** 이 값을 get에서 가져온후 다시 입력해서 보냄
//     user_nickName: ‘’,
//   }
// {
//   "emotion_title": "",
//   "emotion_content": "",
//   "emotion_link": ''
//   "emotion_link_OL":
//   "emotion_password": "",
//   "emotion_createDate": "",
//   "user_email": "",
//   "user_nickName": ""
// },
