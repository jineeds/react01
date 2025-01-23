import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  color: 'yellow',
};

export const changeColorSlice = createSlice({
  name: 'changeColor',
  initialState,
  reducers: {
    colorChange: (state, action) => {
      //action.payload -> 값을 받아오기
      // 여러개 넘기고 싶으면 객체로 만들어서 하나만 {키 : 값, 키 : 값 } = > action.payload
      // action.payload는 하나밖에 작성을 못하기 때문에 여러개 넣고 싶으면 객체로 위에처럼 넣으면 설정이 됨.
      state.color = action.payload;
    },
  },
});
export const { colorChange } = changeColorSlice.actions;
export default changeColorSlice.reducer;
