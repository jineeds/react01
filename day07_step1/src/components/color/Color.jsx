import { useDispatch, useSelector } from 'react-redux';
import { onBlue, onGreen, onPink, onRed } from '../../store/modules/colorSlice';

const Color = () => {
    // const 변수 = useSelector( 매개변수 => 매개변수.컴바인키.슬라이스초기변수)
    // const 변수 = useSelector( 모든값받기 => 매개변수.컴바인키.슬라이스초기변수)
    // const {슬라이스초기변수} = useSelector( 모든값받기 => 매개변수.컴바인키)
    const color = useSelector((state) => state.colorR.color);
    //여기까지 값
    const dispatch = useDispatch();
    //여기까지 함수연결

    return (
        <div>
            <h2>1. UI 디자인 </h2>
            <h2 style={{ fontSize: 30, color: color }}>Color: {color} </h2>
            <p>
                <button onClick={() => dispatch(onGreen())}>green</button>
                <button onClick={() => dispatch(onRed())}>red</button>
                <button>blue</button>
                <button>pink</button>
            </p>
        </div>
    );
};

export default Color;
