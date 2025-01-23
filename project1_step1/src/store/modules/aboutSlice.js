import { createSlice } from '@reduxjs/toolkit';
import aboutdata from '../../assets/api/aboutdata';

const initialState = {
  aboutdata: aboutdata,
  currentPage: null,
};

export const aboutSlice = createSlice({
  name: 'aboue',
  initialState,
  reducers: {
    // 이전 / 이후
    onLoad: (state, action) => {
      state.currenPage = state.aboutdata[0];
    },
    onPrev: (state, action) => {
      const id = action.payload;
      state.currentPage = state.aboutdata[id];
    },
    onNext: (state, action) => {
      const id = action.payload;
      state.current = state.aboutdata[id];
    },
  },
});

export const aboutActions = aboutSlice.actions;
export default aboutSlice.reducer;
