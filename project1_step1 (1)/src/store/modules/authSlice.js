import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
});

export const authActins = authSlice.actions;
export default authSlice.reducer;
