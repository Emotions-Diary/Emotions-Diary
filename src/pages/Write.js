// React import
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { addEmotionThunk } from '../redux/modules/emotion';

const MainBody = styled.div`
  /* background-color: #f7f6f1; */
  background: yellow;
  width: 3000px;
  height: 1500px;
  position: relative;
`;

const MainBox = styled.div`
  position: absolute;
  top: 50%;
  bottom: 50%;
  width: 1000px;
  height: 1000px;
  border: 2px solid black;
  margin-left: 500px;
  margin-bottom: 1000px;
`;

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
    <MainBody>
      <input
        value={title}
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      ></input>
      <input
        value={content}
        onChange={(event) => {
          setContent(event.target.value);
        }}
      ></input>
      <input
        value={nickName}
        onChange={(event) => {
          setNickName(event.target.value);
        }}
      ></input>
      <input
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      ></input>
      <input></input>
      <button onClick={onSubmitHandler}>추가하기</button>
    </MainBody>
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
