// 컬러의 모든 값과 행동 - 자바스크립트영역
import { createSlice } from '@reduxjs/toolkit';

//초기값
const initialState = {
    color: 'skyblue',
};

export const colorSlice = createSlice({
    name: 'colorSlice',
    initialState,
    reducers: {
        onGreen: (state, action) => {
            state.color = 'green';
        },
        onRed: (state, action) => {
            state.color = 'red';
        },
        onBlue: (state, action) => {
            state.color = 'blue';
        },
        onPink: (state, action) => {
            state.color = 'pink';
        },
    },
});
export const { onBlue, onGreen, onPink, onRed } = colorSlice.actions;
export default colorSlice.reducer;
