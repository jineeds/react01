import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    color: 'hotpink',
};

export const changeColorSlice = createSlice({
    name: 'changeColor',
    initialState,
    reducers: {
        colorChange: (state, action) => {
            //action.payload -> 값을 받아오기
            //const xxx = action.payload
            // state.color = xxx;

            //const {xx,xxx} = action.payload
            //여러개 넘기고 싶으면 객체로 만들어서 하나만 {키:값, 키:값} =>action.payload
            //action.payload.키
            state.color = action.payload;
        },
    },
});
export const { colorChange } = changeColorSlice.actions;
export default changeColorSlice.reducer;
