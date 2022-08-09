// React import
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addEmotionThunk } from '../../redux/modules/emotion';
// style import
import styled from 'styled-components';
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
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
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

  const clickBlue = () => {
    setLink(m_blue);
    setLink_OL(m_blue_OL);
    console.log(link, link_OL,createDate);
  };
  const clickGreen = () => {
    setLink(m_green);
    setLink_OL(m_green_OL);
    console.log(link, link_OL);
  };
  const clickOrange = () => {
    setLink(m_orange);
    setLink_OL(m_orange_OL);
    console.log(link, link_OL);
  };
  const clickPink = () => {
    setLink(m_pink);
    setLink_OL(m_pink_OL);
    console.log(link, link_OL);
  };
  const clickYellow = () => {
    setLink(m_yellow);
    setLink_OL(m_yellow_OL);
    console.log(link, link_OL);
  };
  // const [emo]
  // const dispatch = useDispatch();

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

    useEffect(()=>{
      setCreateDate(nowTime)
    },[])

  //시간값

  // const getData = axios.get("http://localhost:5001/users").then((res)=>res.data).then((res)=>console.log(res))
  //값 가져오기
  // console.log(getData)

  // useEffect(()=>{
  // userMemoris()},[]
  // )
  return (
    <WriteBox>
      <WriteHeader>
        <ArrowArea>
          <ArrowBack />
        </ArrowArea>
      </WriteHeader>
      <MongleArea>
        <WriteMongle
          emotion={m_blue}
          emotion_OL={m_blue_OL}
          onClick={clickBlue}
        />
        <WriteMongle
          emotion={m_green}
          emotion_OL={m_green_OL}
          onClick={clickGreen}
        />
        <WriteMongle
          emotion={m_orange}
          emotion_OL={m_orange_OL}
          onClick={clickOrange}
        />
        <WriteMongle
          emotion={m_pink}
          emotion_OL={m_pink_OL}
          onClick={clickPink}
        />
        <WriteMongle
          emotion={m_yellow}
          emotion_OL={m_yellow_OL}
          onClick={clickYellow}
        />
      </MongleArea>
      <WriteDescript>오늘 몽글러의 기분은?</WriteDescript>
      <InputArea>
        <TextArea> 닉네임 :</TextArea> <WriteInput />
      </InputArea>{' '}
      <InputArea2>
        <TextArea2> 비밀번호 :</TextArea2>
        <WriteInput2 type="password" />
      </InputArea2>
      <TitleArea placeholder="제목"></TitleArea>
      <ContentArea
        placeholder="오늘 하루 어땠나요?&#13;&#10;다른 몽글러들에게 추천 해주고 싶은 노래가 있나요?&#13;&#10;오늘 가장 행복했던 일은 무엇인가요?"
      ></ContentArea>
      <WriteButton>작성하기</WriteButton>
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
