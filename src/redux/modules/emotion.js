import { createSlice } from '@reduxjs/toolkit';

const emotionSlice = createSlice({
  name: 'emotion',
  initialState: { emotion: [] },
  reducers: {},
  extraReducers: {},
});
export default emotionSlice.reducer;
