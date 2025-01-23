import { createSlice } from '@reduxjs/toolkit';

const dataList = [
  { id: 1, title: '옥씨부인전', rating: 3, imgurl: './images/img1.jpg' },
  { id: 2, title: '멜로가체질', rating: 3, imgurl: './images/img2.jpg' },
  { id: 3, title: '강남비사이드', rating: 3, imgurl: './images/img3.jpg' },
  { id: 4, title: '오징어게임', rating: 3, imgurl: './images/img4.jpg' },
  { id: 5, title: '비긴어게인', rating: 3, imgurl: './images/img5.jpg' },
  { id: 6, title: '해리포터1', rating: 3, imgurl: './images/img6.jpg' },
  { id: 7, title: '해리포터2', rating: 3, imgurl: './images/img7.jpg' },
  { id: 8, title: '해리포터3', rating: 3, imgurl: './images/img8.jpg' },
];
const initialState = {
  movies: dataList,
};
export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setRating: (state, action) => {
      // state.movies = state.movies.map((movie) => (movie.id === action.payload ? { ...movie, rating: 값 } : movie));
      const { id, idx } = action.payload;
      const movie = state.movies.find((movie) => movie.id === id);

      if (movie) {
        movie.rating = idx + 1;
      }
      /*
      state.키 = 값
      action.payload  => 넘어온값
      const 변수 = action.payload
      const {x} = action.payload
      const {x,y} = action.payload
      */
    },
  },
});
export const movieActions = movieSlice.actions;
export default movieSlice.reducer;
