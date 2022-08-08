import { createSlice } from '@reduxjs/toolkit';

const emotionSlice = createSlice({
  name: 'emotion',
  initialState: { emotions: [] },
  reducers: {},
  extraReducers: {},
});
export default emotionSlice.reducer;
