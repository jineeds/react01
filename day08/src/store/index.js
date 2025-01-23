import { configureStore } from '@reduxjs/toolkit';
import aboutR from './modules/aboutSlice';
import movieR from './modules/movieSlice';
import todoR from './modules/todoSlice';

export const store = configureStore({
  reducer: {
    aboutR,
    movieR,
    todoR,
  },
});
