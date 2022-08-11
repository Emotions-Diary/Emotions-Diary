import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getCommentThunk = createAsyncThunk(
  'comment/getComment',
  async (payload, thunkAPI) => {
    const data = await axios
      .get('https://sheltered-sands-82519.herokuapp.com/comment')
      .then((res) => res.data)
      .catch((err) => console.err(err));
    return thunkAPI.fulfillWithValue(data);
  }
);

export const addCommentThunk = createAsyncThunk(
  'comment/addComment',
  async (payload, thunkAPI) => {
    const data = await axios
      .post('https://sheltered-sands-82519.herokuapp.com/comment', payload)
      .then((res) => res.data)
      .catch((err) => console.err(err));
    return thunkAPI.fulfillWithValue(data);
  }
);
export const deleteCommentThunk = createAsyncThunk(
  'comment/deleteComment',
  async (payload, thunkAPI) => {
    await axios
      .delete(`https://sheltered-sands-82519.herokuapp.com/comment/${payload}`)
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
  },
});

export default commentSlice.reducer;
