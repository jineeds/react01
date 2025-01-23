import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const customerSlice = createSlice({
    name: 'customer',
    initialState,
    reducers: {},
});

export const customerActions = customerSlice.actions;
export default customerSlice.reducer;
