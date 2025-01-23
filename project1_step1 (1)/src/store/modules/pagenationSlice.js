import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const pagenationSlice = createSlice({
    name: 'pagenation',
    initialState,
    reducers: {},
});

export const pagenationActions = pagenationSlice.actions;
export default pagenationSlice.reducer;
