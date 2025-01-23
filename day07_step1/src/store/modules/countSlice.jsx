import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cnt: 1,
};
/*
const initialState = {
    키:숫자,
    키:문자,
    키:논리,
    키:{},
    키:[],
    키:[{}],
    키:[{키:{}}],
};
*/

export const countSlice = createSlice({
    name: 'countSlice',
    initialState,
    reducers: {
        increment: (state, action) => {
            state.cnt += 1;
        },
        onUp: (state, action) => {
            state.cnt += action.payload;
        },
        decrement: (state, action) => {
            if (!action.payload) {
                state.cnt -= 1;
            } else {
                state.cnt -= action.payload;
            }
        },
    },
});
export const countActions = countSlice.actions;
// export const 사용자정의명 = countSlice.actions;
// export const {onUp,decrement} = countSlice.actions;
export default countSlice.reducer;
