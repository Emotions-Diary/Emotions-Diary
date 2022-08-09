import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import Circle from '../../components/Circle/Circle';


const Detail = () => {
	const [todo, setTodo] = useState({
		title: '',
	});

	const initialState = {
		userID: 'id',
		date: '2022/08/13',
		title: '날씨 좋았어요',
		body: '최고',
	};

	const onSubmitHandler = (todo) => {
		axios.post('http://localhost:5001/users', todo);
	};

	const getData = axios
		.get('http://localhost:5001/detail')
		.then((res) => res.data);

	const [detail, setDetail] = useState(initialState);
	console.log(initialState);

	return (
		<SignInBox>
			<SignInHeader>
				<Circle />
			</SignInHeader>
			<h3>asdad</h3>
			<h2>{initialState.userID}</h2>
			<h2>{initialState.date}</h2>
			<h2>{initialState.title}</h2>
			<h2>{initialState.body}</h2>
			<button onClick={onSubmitHandler}>수정하기</button>
		</SignInBox>
	);
};

export default Detail;

export const SignInBox = styled.form`
	width: 485px;
	height: 620px;
	position: relative;
	box-sizing: border-box;
	background-color: #f7f6f1;
	box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
	border-radius: 20px;
	border: 9px solid #d7703f;
`;
export const SignInHeader = styled.div`
	position: absolute;
	top: 0;
	background-color: #d7703f;
	width: 100%;
	height: 10%;
`;