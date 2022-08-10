import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getEmotionThunk = createAsyncThunk(
  'emotion/getEmotion',
  async (payload, thunkAPI) => {
    const data = await axios
      .get('http://localhost:5001/emotion')
      .then((res) => res.data)
      .catch((err) => console.err(err));
    return thunkAPI.fulfillWithValue(data);
  }
);

export const addEmotionThunk = createAsyncThunk(
  'emotion/addEmotion',
  async (payload, thunkAPI) => {
    console.log(payload);
    const data = {
      emotion_id: payload.emotion_id,
      emotion_title: payload.emotion_title,
      emotion_content: payload.emotion_content,
      emotion_link: payload.emotion_link,
      emotion_link_OL: payload.emotion_link_OL,
      emotion_password: payload.emotion_password,
      emotion_createDate: payload.emotion_createDate,
      user_email: payload.user_email,
      user_nickName: payload.user_nickName,
    };
    const resData = await axios
      .post('http://localhost:5001/emotion', data)
      .then((res) => res.data);
    return thunkAPI.fulfillWithValue(resData);
  }
);

export const patchEmotionThunk = createAsyncThunk(
  'emotion/patchEmotion',
  async (payload, thunkAPI) => {
    const data = await axios
      .patch(`http://localhost:5001/emotion/${payload.id}`, payload.newEmotionData)
      .then((res) => res.data)
      .catch((err) => console.err(err));

			console.log(data);
    return thunkAPI.fulfillWithValue(data);
  }
);

const initialState = {
  is_loaded: true,
  emotion: [],
};

const emotionSlice = createSlice({
  name: 'emotion',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addEmotionThunk.fulfilled, (state, action) => {
      state.emotion = [...state.emotion, action.payload];
    });
    builder.addCase(getEmotionThunk.fulfilled, (state, action) => {
      state.is_loaded = false;
      state.emotion = action.payload;
    });
		builder.addCase(patchEmotionThunk.fulfilled, (state, action) => {
			const newState = state.emotion.filter((emo) => emo.id !== action.payload.id);
			newState.push(action.payload);
			console.log(newState);
			state.emotion = newState;
		});
  },
});

export const { emotionActions } = emotionSlice.actions;
export default emotionSlice.reducer;
