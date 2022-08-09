// React import
import { useState } from 'react';
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
  InputArea2,
  WriteMongle,
  MongleArea,
  TitleArea,
  ContentArea,
  WriteButton
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
  const dispatch = useDispatch();

  const onSubmitHandler = () => {
    setwrites({
      title: title,
      content: content,
      nickName: nickName,
      password: password,
    });
    dispatch(addEmotionThunk(writes));
    // dispatch(emotionActions.emotionAction(emotions))
    // axios.post('http://localhost:5001/users', emotions);
  };

  const nowTime = moment()
    .format('YYYY-MM-DD')
    .split('-')
    .map((item) => {
      if (item[0] === '0') return item[1];
      else return item;
    });
  console.log(writes);
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
      <WriteMongle emotion={m_blue} emotion_OL={m_blue_OL} />
      <WriteMongle emotion={m_green} emotion_OL={m_green_OL} />
      <WriteMongle emotion={m_orange} emotion_OL={m_orange_OL} />
      <WriteMongle emotion={m_pink} emotion_OL={m_pink_OL} />
      <WriteMongle emotion={m_yellow} emotion_OL={m_yellow_OL} />
      </MongleArea>
      <WriteDescript>오늘 몽글러의 기분은?</WriteDescript>
      <InputArea>
        닉네임 :<WriteInput />
      </InputArea>{' '}
      <InputArea2>
        비밀번호 :<WriteInput type="password"/>
      </InputArea2>
      <TitleArea placeholder='제목'></TitleArea>
      <ContentArea placeholder="오늘 하루 어떠셨나요??&#13;&#10;오늘 하루의 응어리를 덜어내보세요"></ContentArea>
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
