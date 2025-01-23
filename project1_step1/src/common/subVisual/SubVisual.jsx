import { useDispatch, useSelector } from 'react-redux';
import { SubVisualWrap } from './style';
import { useEffect } from 'react';

const SubVisual = () => {
    return (
        // {/* Dom props 경고 $속성 값을 props으로 Dom에 전달 못한다 */}
        <SubVisualWrap $bgurl={bgurl}>
            <h2> 타이틀 </h2>
        </SubVisualWrap>
    );
};

export default SubVisual;
