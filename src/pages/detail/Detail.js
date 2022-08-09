import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
		<div>
			<h3>asdad</h3>
			<h2>{initialState.userID}</h2>
			<h2>{initialState.date}</h2>
			<h2>{initialState.title}</h2>
			<h2>{initialState.body}</h2>
			<button onClick={onSubmitHandler}>수정하기</button>
		</div>
	);
};

export default Detail;
