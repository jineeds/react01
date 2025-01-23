import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    text: '홍길동 안녕하세요',
};

export const aboutSlice = createSlice({
    name: 'about',
    initialState,
    reducers: {
        onView: (state, action) => {
            // state.text = '지금은 연습중';
            // state.text = action.payload;
            const txt = action.payload;
            state.text = txt;
        },
    },
});

export const aboutActions = aboutSlice.actions;
export default aboutSlice.reducer;
