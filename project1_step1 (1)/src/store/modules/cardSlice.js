import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const cardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {},
});

export const cardActions = cardSlice.actions;
export default cardSlice.reducer;
