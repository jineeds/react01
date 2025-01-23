import { createSlice } from '@reduxjs/toolkit';
import { getMusic } from './getThunk';
const initialState = {
    musicData: [],
    loading: true,
    error: null,
};

export const musicSlice = createSlice({
    name: 'music',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getMusic.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getMusic.fulfilled, (state, action) => {
                state.loading = false;
                state.musicData = action.payload;
            })
            .addCase(getMusic.rejected, (state, action) => {
                state.loading = true;
                state.error = '주소가 잘못되었습니다.';
            });
    },
});

export const musicActions = musicSlice.actions;
export default musicSlice.reducer;
