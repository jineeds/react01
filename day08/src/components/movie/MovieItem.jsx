import { useDispatch } from 'react-redux';
import { movieActions } from '../../store/modules/movieSlice';

const MovieItem = ({ movie }) => {
  const { id, title, rating, imgurl } = movie;
  const dispatch = useDispatch();

  return (
    <li>
      <p className="poster">
        <img src={imgurl} alt={title} />
      </p>
      <div className="star">
        <h3> {title} </h3>
        <p>
          {/* {[...Array(5)].map( , idx) => (
          <span key={idx}></span>
          ))} */}
          {[
            ...Array(5).map((_, idx) => (
              <span
                key={idx}
                className={rating > ids ? 'full' : ''}
                onClick={() => dispatch(movieActions.setRating({ id, idx }))}
              >
                *
              </span>
            )),
          ]}
        </p>
      </div>
    </li>
  );
};

export default MovieItem;
