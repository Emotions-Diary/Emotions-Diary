import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { now } from 'moment';

export const addEmotionThunk = createAsyncThunk(
  'emotion/addemotionThunk',
  async (payload, thunkAPI) => {
    console.log(payload)
    const data = {
      emotion_id: payload.emotion_id,
      emotion_title: payload.emotion_title,
      emotion_content: payload.emotion_content,
      emotion_link: payload.emotion_link,
      emotion_link_OL: payload.emotion_link_OL,
      emotion_password: payload.emotion_password,
      emotion_createDate: payload.emotion_createDate,
      // user_email: payload.user_email,
      user_nickName: payload.user_nickName,
    };
    const resData = await axios
      .post('http://localhost:5001/emotion', data)
      .then((res) => res.data);
    return thunkAPI.fulfillWithValue(resData);
  }
);

// 글쓰는 창에 들어가면 get으로 유저 정보를 가져와서

// export const getemotionThunk = createAsyncThunk(
//     'user/getemotionThunk',
//     async (payload, thunkAPI) => {
//     const resData = await axios
//     .get('http://localhost:5001/users')
//     .then((res) => res.data);
//       }  )

const initialState = {
  emotions: [],
};

const emotionSlice = createSlice({
  name: 'emotion',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addEmotionThunk.fulfilled, (state, action) => {
      state.emotions = [...state.emotions, action.payload];
    });
  },
});

export const { emotionActions } = emotionSlice.actions;
export default emotionSlice.reducer;
