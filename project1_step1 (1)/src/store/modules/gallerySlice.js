import { createSlice } from '@reduxjs/toolkit';

const initialState = {};
export const gallerySlice = createSlice({
    name: 'gallery',
    initialState,
    reducers: {},
});

export const galleryActions = gallerySlice.actions;
export default gallerySlice.reducer;
