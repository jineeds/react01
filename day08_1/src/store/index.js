import { configureStore } from '@reduxjs/toolkit';
import aboutR from './modules/aboutSlice';
import movieR from './modules/movieSlice';
import todoR from './modules/todoSlice';
import postR from './modules/postSlice';

export const store = configureStore({
    reducer: {
        aboutR,
        movieR,
        todoR,
        postR,
    },
});
