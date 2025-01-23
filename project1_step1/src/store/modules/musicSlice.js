import { createSlice } from '@reduxjs/toolkit';
import { getMusic } from './getThunk';

const initialState = {
  musicData: [],
  loading: true,
  error: null,
};

export const musicSlice = createSlice({
  name: 'music',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMusic.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getMusic.fulfilled, (state, action) => {
        state.loading = false;
        state.musicData = action.payload;
        // return { ...state, musicData: action.payload };
      })
      .addCase(getMusic.rejected, (state, action) => {
        state.loading = true;
        state.error = '주소 잘못됨';
      });
  },
});

export const musicActions = musicSlice.actions;
// 뮤직 액션 - 행동
export default musicSlice.reducer;
// 뮤직슬라이스에 다 묶어서 내보내는?
