import { useDispatch, useSelector } from 'react-redux';
import { countActions } from '../../store/modules/countSlice';

const Count = () => {
    const { cnt } = useSelector((state) => state.countR);
    const dispatch = useDispatch();

    return (
        <div>
            <h2 style={{ fontSize: 40 }}> 숫자 : {cnt} </h2>
            <p>
                <button onClick={() => dispatch(countActions.increment())}>증가</button>
                <button onClick={() => dispatch(countActions.decrement())}>감소</button>
            </p>
            <p>
                <button onClick={() => dispatch(countActions.onUp(10))}>10씩 증가</button>
                <button onClick={() => dispatch(countActions.decrement(10))}>10씩 감소</button>
            </p>
            <p>
                <button>50씩 증가</button>
                <button>50씩 감소</button>
            </p>
        </div>
    );
};

export default Count;
