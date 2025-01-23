import { createSlice } from '@reduxjs/toolkit';

const dataList = [
    { id: 1, title: '가족계획', rating: 3, imgurl: './images/img1.jpg' },
    { id: 2, title: '강남좀비', rating: 4, imgurl: './images/img2.jpg' },
    { id: 3, title: '옥씨부인', rating: 0, imgurl: './images/img3.jpg' },
    { id: 4, title: '용의자X', rating: 0, imgurl: './images/img4.jpg' },
    { id: 5, title: '가족계획2', rating: 0, imgurl: './images/img5.jpg' },
    { id: 6, title: '가족계획3', rating: 0, imgurl: './images/img6.jpg' },
    { id: 7, title: '가족계획4', rating: 0, imgurl: './images/img7.jpg' },
    { id: 8, title: '가족계획5', rating: 0, imgurl: './images/img8.jpg' },
];
const initialState = {
    movies: dataList,
};

export const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        setRating: (state, action) => {
            // state.movies = state.movies.map( movie => movie.id === action.payload ? {...movie, rating:값}:movie)
            const { id, idx } = action.payload;
            const movie = state.movies.find((movie) => movie.id === id);
            if (movie) {
                movie.rating = idx + 1;
            }
        },
    },
});

export const movieActions = movieSlice.actions;
export default movieSlice.reducer;
