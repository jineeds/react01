import styled from 'styled-components';
import MovieList from '../../components/movie/MovieList';

const MovieCon = styled.div``;

const Movie = () => {
    return (
        <MovieCon>
            <div className="inner">
                <h2> Movie Page입니다.</h2>
                <MovieList />
            </div>
        </MovieCon>
    );
};

export default Movie;
