import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../store/modules/counterSlice';
import { countActions } from '../../store/modules/countSlice';

const Count = () => {
  //   const count = useSelector((state) => state.countR);
  const { cnt } = useSelector((state) => state.countR);
  const dispatch = useDispatch();
  return (
    <div>
      <h2 style={{ fontSize: 40 }}> 숫자 : {cnt}</h2>
      <p>
        <button
          onClick={() => {
            dispatch(countActions.increment());
            // 사용자 정의명 countActions 안에 있는 증가를 연결 -> countslice page 체크
          }}
        >
          증가
        </button>
        <button
          onClick={() => {
            dispatch(countActions.decrement());
          }}
        >
          감소
        </button>
      </p>
      <p>
        <button
          onClick={() => {
            dispatch(countActions.onUp(10));
          }}
        >
          10씩 증가
        </button>
        <button
          onClick={() => {
            dispatch(countActions.onUp(-10));
          }}
        >
          10씩 감소
        </button>
      </p>
      <p>
        <button
          onClick={() => {
            dispatch(countActions.onUp(50));
          }}
        >
          50씩 증가
        </button>
        <button
          onClick={() => {
            dispatch(countActions.onUp(-50));
          }}
        >
          50씩 감소
        </button>
      </p>
    </div>
  );
};

export default Count;
