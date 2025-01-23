import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getTodos = createAsyncThunk('todos/getTodos', async () => {
    const url = `https://jsonplaceholder.typicode.com/todos`;
    const response = await axios.get(url);
    return response.data;
});

const initialState = {
    data: [],
    loading: true,
    error: null,
};

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        //함수명:(state,action) => {}
    },
    extraReducers: (builder) => {
        builder
            .addCase(getTodos.pending, (state, action) => {
                //대기
            })
            .addCase(getTodos.fulfilled, (state, action) => {
                //성공
                state.data = action.payload;
            })
            .addCase(getTodos.rejected, (state, action) => {
                //실패
            });
    },
});

export const todosActions = todosSlice.actions;
export default todosSlice.reducer;
