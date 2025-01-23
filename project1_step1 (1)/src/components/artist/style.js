import styled from 'styled-components';

export const CardListBox = styled.div`
    /*  */
`;

export const CardBox = styled.article`
    width: 100%;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    background: rgb(231, 231, 231);

    margin-bottom: 50px;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 3px 8px;
    padding: 20px 25px;
    transition: all 0.3s ease;
    padding: 20px;

    &:hover {
        transform: scale(1.05);
        background-color: rgba(255, 99, 71, 0.3);
    }
    .pic {
        width: 20%;
        img {
            width: 200px;
        }
    }

    .text-info {
        width: 75%;
        h2 {
            margin-bottom: 10px;
            text-align: left;
            color: black;
        }
        h3 {
            color: #272727;
        }
    }
`;
