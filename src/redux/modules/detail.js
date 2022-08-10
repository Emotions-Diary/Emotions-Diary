import { createSlice, current } from '@reduxjs/toolkit';
// import { UsersData } from "./FakeData";

const initialState = [
	{
		id: 0,
		name: '이름',
		title: '제목',
		date: '2022/08/11',
		contents: '수정할거야',
		comment: '댓글',
	},
];

export const userSlice = createSlice({
	name: 'users',
	initialState: initialState,
	reducers: {
		addUser: (state, action) => {
			state.push(action.payload);
		},

		addComment: (state, action) => {
			state = state.push(action.payload);
		},

		delComment: (state, action) => {
			const newDelCmt = current(state).filter((del) => {
				return del.id !== action.payload;
			});
			return newDelCmt;
		},

		editDiary: (state, action) => {
			state = state.map((data) => {
				if (data.id === action.payload.id) {
					data.contents = action.payload.new;
				}
				return data;
				//function안에 return값 써주기
			});
		},

		getDiary: (state, action) => {
			state = state.map((data) => {
				if (data.id === action.payload) {
					state.id = action.payload;
				}
				return data;
			});
		},
	},
});

export const {
	addUser,
	addComment,
	delComment,
	changeComment,
	editDiary,
	getDiary,
} = userSlice.actions;

export default userSlice.reducer;