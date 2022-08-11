import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = process.env.REACT_APP_API_URL;

export const getCommentThunk = createAsyncThunk(
  'comment/getComment',
  async (payload, thunkAPI) => {
    const data = await axios
      .get(`${URL}/comment`)
      .then((res) => res.data)
      .catch((err) => console.err(err));
    return thunkAPI.fulfillWithValue(data);
  }
);
export const addCommentThunk = createAsyncThunk(
  'comment/addComment',
  async (payload, thunkAPI) => {

    const data = await axios
      .post(`${URL}/comment`, payload)
      .then((res) => res.data)
      .catch((err) => console.err(err));
    return thunkAPI.fulfillWithValue(data);
  }
);
export const deleteCommentThunk = createAsyncThunk(
  'comment/deleteComment',
  async (payload, thunkAPI) => {
    await axios
      .delete(`${URL}/comment/${payload}`)
      .then((res) => res.data)
      .catch((err) => console.err(err));
    return payload;
  }
);

const initialState = {
  is_loaded: true,
  comment: [],
};

const commentSlice = createSlice({
  name: 'comment',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addCommentThunk.fulfilled, (state, action) => {
      state.comment = [...state.comment, action.payload];
    });
    builder.addCase(getCommentThunk.fulfilled, (state, action) => {
      state.is_loaded = false;
      state.comment = action.payload;
    });
    builder.addCase(deleteCommentThunk.fulfilled, (state, action) => {
      state.comment = state.comment.filter((com) => com.id !== action.payload); 
    });
  }
});

export default commentSlice.reducer;