// React import
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addEmotionThunk } from '../../redux/modules/emotion';
import PropTypes from 'prop-types';
import {
	WriteBox,
	WriteHeader,
	ArrowBack,
	ArrowArea,
	WriteMongle,
	MongleArea,
	TitleArea,
	ContentArea,
	UpdateButton,
	UpdateButtonGroup,
	CancelButton,
	DetailNickname,
	DetailDate,
	DetailInputArea,
	CommentGroup,
	CommentNicknameInput,
	CommentContentInput,
	CommentAddButton,
} from './Detail.styled';
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

const Detail = () => {
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
		console.log(link, link_OL, createDate);
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

	useEffect(() => {
		setCreateDate(nowTime);
	}, []);

	const [editMode, setEditMode] = useState(false);
	const onClickButton = () => {
		setEditMode(true);
	};
	const onSaveButton = () => {
		setEditMode(false);
	};

	return (
		<WriteBox>
			<WriteHeader>
				<ArrowArea>
					<ArrowBack />
				</ArrowArea>
			</WriteHeader>
			<DetailInputArea>
				<DetailNickname> 성몽글 </DetailNickname>
				<DetailDate>2022/08/16</DetailDate>
			</DetailInputArea>
			<MongleArea>
				<WriteMongle
					emotion={m_pink}
					emotion_OL={m_pink_OL}
					onClick={clickPink}
				/>
			</MongleArea>
			<TitleArea>오늘은 한강 산책을 다녀왔어요</TitleArea>
			<ContentArea placeholder="오늘은 날씨가 엄청 화창했습니다. 바람도 선선히 불고 적당했어요 :) kenny the king - lemonade를 들으며 산책 했는데 날씨와 딱 어울리는 노래였습니다. 다른 몽글러분들은 어떤 하루를 보내셨나요?"></ContentArea>
			<UpdateButtonGroup>
				{editMode ? (
					<UpdateButton onClick={onSaveButton} type="button">
						저장
					</UpdateButton>
				) : (
					<UpdateButton onClick={onClickButton} type="button">
						수정
					</UpdateButton>
				)}

				<CancelButton>취소</CancelButton>
			</UpdateButtonGroup>

			{/* <CommentInputGroup>
				<CommentInputArea>
					<CommentNicknameTextArea placeholder="제목"></CommentNicknameTextArea>{' '}
					<WriteInput />
				</CommentInputArea>{' '}
				<CommentInputArea2>
					<CommentContentTextArea placeholder="내용"></CommentContentTextArea>
					<WriteInput2 />
				</CommentInputArea2>
				<AddCommentButton>등록</AddCommentButton>
			</CommentInputGroup> */}

			<CommentGroup>
				<CommentNicknameInput
					type="commentNickname"
					placeholder="닉네임"
					required
				/>
				<CommentContentInput
					type="commentContent"
					placeholder="내용을 입력하세요."
					required
				/>
				<CommentAddButton type="button">등록</CommentAddButton>
			</CommentGroup>

			{/* <CommentGetNickname></CommentGetNickname>
			<CommentGetComment></CommentGetComment> */}
			
		</WriteBox>
	);
};

export default Detail;
