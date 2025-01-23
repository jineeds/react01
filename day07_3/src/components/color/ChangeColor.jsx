import { useSelector, useDispatch } from 'react-redux';
import { colorChange } from '../../store/modules/changeColorSlice';
const ChangeColor = () => {
    const { color } = useSelector((state) => state.changeColorR);
    const dispatch = useDispatch();
    return (
        <div>
            <h2 style={{ fontSize: 30, fontWeight: 700, color: color }}> ChangeColor :{color} </h2>
            <p> 행동이 동일하고 값이 많으면 ? </p>
            <p>
                <button onClick={() => dispatch(colorChange('red'))}>red</button>
                <button onClick={() => dispatch(colorChange('green'))}>green</button>
                <button onClick={() => dispatch(colorChange('blue'))}>blue</button>
                <button onClick={() => dispatch(colorChange('pink'))}>pink</button>
                <button onClick={() => dispatch(colorChange('skyblue'))}>skyblue</button>
                <button onClick={() => dispatch(colorChange('yellow'))}>yellow</button>
            </p>
        </div>
    );
};

export default ChangeColor;
