import styled from 'styled-components';

export const SubVisualWrap = styled.section`
    background-image: url(${(props) => props.$bgurl});
    background-position: 0 20%;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 350px;
    h2 {
        font-size: 60px;
        margin-bottom: 0;
        color: tomato;
        opacity: 0.8;
        font-weight: 500;
    }
`;
