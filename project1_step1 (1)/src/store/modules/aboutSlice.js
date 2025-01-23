import { createSlice } from '@reduxjs/toolkit';
import aboutdata from '../../assets/api/aboutdata';

const initialState = {
    aboutData: aboutdata,
    currentPage: null,
};

export const aboutSlice = createSlice({
    name: 'about',
    initialState,
    reducers: {
        onLoad: (state, action) => {
            state.currentPage = state.aboutData[0];
        },
        onPrev: (state, action) => {
            const id = action.payload;
            state.currentPage = state.aboutData[id];
        },
        onNext: (state, action) => {
            const id = action.payload;
            state.currentPage = state.aboutData[id];
        },
    },
});

export const aboutActions = aboutSlice.actions;
export default aboutSlice.reducer;
