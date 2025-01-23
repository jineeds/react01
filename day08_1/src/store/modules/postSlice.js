import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getPost = createAsyncThunk('posts/getPost', async (text) => {
    //try 예외처리
    const url = `https://hn.algolia.com/api/v1/search?query=${text}`;
    const response = await axios.get(url);
    return response.data.hits;
});

const initialState = {
    posts: [],
    loading: true,
    error: null,
    text: '',
};

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        changeInput: (state, action) => {
            state.text = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getPost.pending, (state, action) => {
                //대기
            })
            .addCase(getPost.fulfilled, (state, action) => {
                //성공
                state.posts = action.payload;
            })
            .addCase(getPost.rejected, (state, action) => {
                //실패
            });
    },
});

export const postActions = postSlice.actions;
export default postSlice.reducer;
