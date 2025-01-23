import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../store/modules/counterSlice';

const Counter = () => {
  const count = useSelector((state) => state.counterR);
  const { color } = useSelector((state) => state.colorR);
  const dispatch = useDispatch();
  return (
    <div>
      <h2 style={{ fontSize: 40, color: color }}> 카운트 : {count}</h2>
      <p>
        <p>
          <button
            onClick={() => {
              dispatch(increment());
            }}
          >
            증가
          </button>
          <button
            onClick={() => {
              dispatch(decrement());
            }}
          >
            감소
          </button>
        </p>
        <button>초기화</button>
      </p>
    </div>
  );
};

export default Counter;
