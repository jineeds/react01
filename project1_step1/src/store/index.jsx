import { configureStore } from '@reduxjs/toolkit';
import aboutR from './modules/aboutSlice';
// import aboutR from './modules/aboutSlice'
import musicR from './modules/musicSlice';

export const store = configureStore({
  reducer: {
    aboutR,
    musicR,
  },
});
