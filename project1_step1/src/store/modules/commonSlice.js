import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const commonSlice = createSlice({
    name: 'common',
    initialState,
    reducers: {},
});

export const commonActions = commonSlice.actions;
export default commonSlice.reducer;
