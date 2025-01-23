import styled from 'styled-components';

export const AboutCon1Wrap = styled.div`
    h3 {
        font-size: 50px;
        font-weight: 700;
        margin-bottom: 50px;
        font-weight: 300;
    }
    .pic {
        height: 500px;
        width: 100%;
        overflow: hidden;
        position: relative;
        border: 1px solid #efefef;

        img {
            width: 100%;
            position: absolute;
            left: 0;
            top: -400px;
        }
    }
    .works {
        display: flex;
        justify-content: space-between;
        div {
            width: 45%;
            dl {
                margin-top: 50px;
                dt {
                    font-size: 25px;
                    margin-bottom: 20px;
                }
                dd {
                    line-height: 40px;
                }
            }
        }
    }
`;
export const AboutCon2Wrap = styled.div`
    background-image: url('/images/about/img5.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 0 0;
    height: 500px;
    background-attachment: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    h3 {
        font-size: 50px;
        color: tomato;
        opacity: 0.7;
        font-weight: 300;
    }
`;

export const AboutCon3Wrap = styled.div`
    h3 {
        font-size: 50px;
        color: tomato;
        opacity: 0.7;
        font-weight: 300;
        margin-bottom: 50px;
    }
`;
