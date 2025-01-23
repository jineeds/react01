import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { aboutActions } from '../../store/modules/aboutSlice';

const AboutCon = styled.div`
    h3 {
        font-size: 30px;
        margin-bottom: 20px;
    }
    button {
        width: 150px;
        height: 50px;
        cursor: pointer;
    }
`;

const About = () => {
    //값처리
    const { text } = useSelector((state) => state.aboutR);
    const dispatch = useDispatch();

    return (
        <AboutCon>
            <div className="inner">
                <h2> About Page입니다.</h2>

                <h3>{text}</h3>
                <button onClick={() => dispatch(aboutActions.onView('철수안녕'))}> 인사 </button>
            </div>
        </AboutCon>
    );
};

export default About;
