import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  text: '뚜비 하2',
};

export const aboutSlice = createSlice({
  name: 'about',
  initialState,
  reducers: {
    onView: (state, action) => {
      // state.text = '지금은 연습중';
      const txt = action.payload;
      state.text = txt;
      /*
      state.키 = 값
      action.payload => 넘어온 값
      const 변수 = action.payload
      const {x} = action.payload
      const{x, y} = action.payload
      */
    },
  },
});

export const aboutActions = aboutSlice.actions;

export default aboutSlice.reducer;
