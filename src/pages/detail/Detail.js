// React import
import { useState, useEffect, useRef } from 'react';
import useInput from '../../hooks/useInput';

// Redux import
import { signInAction } from '../../redux/modules/user';
import { useDispatch, useSelector } from 'react-redux';
import {
  patchEmotionThunk,
  deleteEmotionThunk,
} from '../../redux/modules/emotion';
import { addCommentThunk, getCommentThunk } from '../../redux/modules/comment';

// Component import
import Button from '../../elements/button/Button';
import Comment from '../../components/comment/Comment';

// Package import
import { useNavigate, useParams } from 'react-router-dom';

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
  MainButton,
  DetailBox,
  EmotionForm,
  WriteHeader,
  ArrowBack,
  ArrowArea,
  WriteMongle,
  MongleArea,
  TitleArea,
  ContentArea,
  UpdateButtonGroup,
  UpdatePassword,
  DetailNickname,
  DetailDate,
  DetailInputArea,
  CommentForm,
  CommentGroup,
  CommentNicknameInput,
  CommentContentInput,
  CommentAddButton,
  CommentTextGroup,
} from './Detail.styled';

const Detail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const emotions = useSelector((state) => state.emotion.emotion);
  const emotion = emotions.filter((emotion) => emotion.id === parseInt(id));


  const comments = useSelector((state) => state.comment.comment);
  const commentsReverse = [...comments].reverse();

  const is_loaded = useSelector((state) => state.comment.is_loaded);

  const [modify, setModify] = useState(false);
  const [title, setTitle] = useInput(emotion[0].emotion_title);
  const [content, setContent] = useInput(emotion[0].emotion_content);
  const [password, setPassword] = useInput('');
  const [nickName, setNickName] = useState('');
  const [comment, setComment] = useState('');

  const titleRef = useRef();
  const contentRef = useRef();

  const changeStatus = () => {
    if (modify) {
      titleRef.current.style.backgroundColor = '#e66a2f';
      titleRef.current.style.color = '#f7f6f1';
    } else {
      titleRef.current.style.backgroundColor = '#f7f6f1';
      titleRef.current.style.color = '#000000';
    }
    titleRef.current.disabled = !titleRef.current.disabled;
    contentRef.current.disabled = !contentRef.current.disabled;
    setModify(!modify);
  };
  const emotionModify = (event) => {
    event.preventDefault();

    const newEmotionData = {
      emotion_title: title,
      emotion_content: content,
    };

    if (emotion[0].emotion_password !== password) {
      alert('??????????????? ???????????? ????????????.');
    } else {
      dispatch(patchEmotionThunk({ id, newEmotionData }));
      titleRef.current.disabled = true;
      contentRef.current.disabled = true;
      setModify(!modify);
      navigate(`/detail/${id}`);
    }
  };

  const commentHandle = (event) => {
    event.preventDefault();

    const newCommentData = {
      emotion_id: parseInt(id),
      comment_nickName: nickName,
      comment_comment: comment,
    };
    dispatch(addCommentThunk(newCommentData));
    setNickName('');
    setComment('');
  };

  const deleteEmotion = () => {
    const password = prompt('??????????????? ??????????????????.');
    if (emotion[0].emotion_password === password) {
      dispatch(deleteEmotionThunk(parseInt(id)));
      navigate('/');
    } else {
      alert('??????????????? ???????????? ????????????.');
    }
  };

  const signOut = () => {
    dispatch(signInAction({ userEmail: '', loginStatus: false }));
    navigate('/');
  };

  useEffect(() => {
    dispatch(getCommentThunk());
  }, []);

  return (
    <>
      <MongleLogo onClick={() => navigate('/')} />
      <MainButton onClick={() => signOut()}>LOGOUT</MainButton>
      <DetailBox color={emotion[0].emotion_color}>
        <EmotionForm
          name="emotionForm"
          onSubmit={(event) => emotionModify(event)}
        >
          <WriteHeader color={emotion[0].emotion_color}>
            <ArrowArea onClick={() => navigate('/')}>
              <ArrowBack color={emotion[0].emotion_color} />
            </ArrowArea>
          </WriteHeader>
          <DetailInputArea color={emotion[0].emotion_color}>
            <DetailNickname color={emotion[0].emotion_color}>
              {emotion[0].user_nickName}
            </DetailNickname>
            <DetailDate color={emotion[0].emotion_color}>
              {emotion[0].emotion_createDate[0]}/
              {emotion[0].emotion_createDate[1].padStart(2, '0')}/
              {emotion[0].emotion_createDate[2]}
            </DetailDate>
          </DetailInputArea>
          <MongleArea>
            <WriteMongle emotion={emotion[0].emotion_link} />
          </MongleArea>
          <TitleArea
            value={title}
            onChange={setTitle}
            color={emotion[0].emotion_color}
            ref={titleRef}
            maxLength="18"
            disabled
          ></TitleArea>
          <ContentArea
            value={content}
            onChange={setContent}
            ref={contentRef}
            color={emotion[0].emotion_color}
            disabled
          >
            {emotion[0].emotion_content}
          </ContentArea>
          <UpdateButtonGroup>
            {modify ? (
              <>
                <UpdatePassword
                  type="password"
                  value={password}
                  onChange={setPassword}
                  placeholder={'??????????????? ??????????????????.'}
                  color={emotion[0].emotion_color}
                  required
                />
                <Button
                  type={'submit'}
                  styled={{
                    width: '70px',
                    height: '30px',
                    ft_size: '11px',
                    bg_color: emotion[0].emotion_color,
                  }}
                  text={'??????'}
                />
                <Button
                  type={'submit'}
                  onClick={changeStatus}
                  styled={{
                    width: '70px',
                    height: '30px',
                    ft_size: '11px',
                    bg_color: '#cecece',
                  }}
                  text={'??????'}
                />
              </>
            ) : (
              <>
                <Button
                  type={'button'}
                  onClick={changeStatus}
                  styled={{
                    width: '70px',
                    height: '30px',
                    ft_size: '11px',
                    bg_color: emotion[0].emotion_color,
                  }}
                  text={'??????'}
                />
                <Button
                  type={'button'}
                  onClick={deleteEmotion}
                  styled={{
                    width: '70px',
                    height: '30px',
                    ft_size: '11px',
                    bg_color: '#cecece',
                  }}
                  text={'??????'}
                />
              </>
            )}
          </UpdateButtonGroup>
        </EmotionForm>
        <CommentForm
          name="commentForm"
          onSubmit={(event) => commentHandle(event)}
        >
          <CommentGroup>
            <CommentNicknameInput
              type="text"
              value={nickName}
              onChange={(e) => setNickName(e.target.value)}
              placeholder="?????????"
              maxLength={4}
              minLength={2}
              color={emotion[0].emotion_color}
              required
            />
            <CommentContentInput
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="????????? ???????????????."
              color={emotion[0].emotion_color}
              required
            />
            <CommentAddButton type="submit">??????</CommentAddButton>
          </CommentGroup>
          <CommentTextGroup color={emotion[0].emotion_color}>
            {is_loaded ? (
              <div>Loading..</div>
            ) : (
              commentsReverse.map((com) => {
                if (parseInt(id) === com.emotion_id) {
                  return (
                    <Comment
                      key={com.id}
                      id={com.id}
                      nickName={com.comment_nickName}
                      comment={com.comment_comment}
                    />
                  );
                }
              })
            )}
          </CommentTextGroup>
        </CommentForm>
      </DetailBox>
    </>
  );
};

export default Detail;
